'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2 } from 'lucide-react';
import { runInteractiveAIDemo, type InteractiveAIDemoInput } from '@/ai/flows/interactive-ai-demo';

const formSchema = z.object({
  task: z.string().min(1, { message: "Please select a task." }),
  inputData: z.string().min(5, { message: "Input data must be at least 5 characters." }),
  instructions: z.string().optional(),
});

type AIDemoFormValues = z.infer<typeof formSchema>;

const aiTasks = [
  { value: "text-summarization", label: "Text Summarization" },
  { value: "translation-to-french", label: "Translation (to French)" },
  { value: "question-answering", label: "Question Answering" },
  { value: "sentiment-analysis", label: "Sentiment Analysis" },
];

export default function AIDemoRunner() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [aiResult, setAiResult] = useState<string | null>(null);

  const form = useForm<AIDemoFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: '',
      inputData: '',
      instructions: '',
    },
  });

  async function onSubmit(values: AIDemoFormValues) {
    setIsLoading(true);
    setAiResult(null);
    try {
      const input: InteractiveAIDemoInput = {
        task: values.task,
        inputData: values.inputData,
        instructions: values.instructions || undefined,
      };
      const result = await runInteractiveAIDemo(input);
      setAiResult(result.result);
      toast({
        title: 'AI Demo Successful!',
        description: 'The AI has processed your request.',
      });
    } catch (error) {
      console.error('AI Demo error:', error);
      toast({
        title: 'AI Demo Error',
        description: 'Could not process your request. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Interactive AI Demo</CardTitle>
          <CardDescription>
            Experience the power of AI firsthand. Choose a task, provide input, and see the results.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="task"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>AI Task</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an AI task to demonstrate" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {aiTasks.map(task => (
                          <SelectItem key={task.value} value={task.value}>{task.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="inputData"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Input Data</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter text or data for the AI..." {...field} rows={5} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="instructions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Specific Instructions (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Summarize in one sentence, translate formally" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-4 w-4" />
                )}
                Run AI Demo
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>AI Output</CardTitle>
          <CardDescription>The result from the AI model will appear here.</CardDescription>
        </CardHeader>
        <CardContent className="min-h-[200px] bg-muted/50 rounded-md p-4">
          {isLoading && !aiResult && (
            <div className="flex items-center justify-center h-full">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}
          {aiResult && <pre className="whitespace-pre-wrap text-sm">{aiResult}</pre>}
          {!isLoading && !aiResult && (
            <p className="text-muted-foreground text-center py-10">
              Submit the form to see the AI in action.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
