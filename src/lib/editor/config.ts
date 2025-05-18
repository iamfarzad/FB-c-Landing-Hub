// Stub implementations; replace with actual ProseMirror configuration.
export const documentSchema: any = {};

export function handleTransaction(opts: {
  transaction: any;
  editorRef: any;
  onSaveContent: (content: string, debounce: boolean) => void;
}): void {
  // No-op stub
}

export function headingRule(level: number): any {
  // No-op stub
  return null;
}