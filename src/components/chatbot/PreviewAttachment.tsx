
'use client';

import type { Attachment } from 'ai';
import { Button } from '@/components/ui/button';
import { X, Paperclip, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface PreviewAttachmentProps {
  attachment: Attachment;
  onRemove?: () => void;
  isUploading?: boolean;
}

export function PreviewAttachment({ attachment, onRemove, isUploading }: PreviewAttachmentProps) {
  const { name, url, contentType } = attachment;

  return (
    <div className="relative group p-2 border rounded-lg bg-muted/50 flex flex-col items-center w-24 h-28 shadow-sm">
      <div className="w-16 h-16 aspect-square rounded-md relative flex items-center justify-center overflow-hidden mb-1">
        {isUploading ? (
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        ) : contentType?.startsWith('image/') && url ? (
          <Image
            src={url}
            alt={name || 'Image attachment'}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        ) : (
          <Paperclip className="h-8 w-8 text-muted-foreground" />
        )}
      </div>
      <p className="text-xs text-muted-foreground w-full truncate text-center" title={name || 'attachment'}>
        {name || 'attachment'}
      </p>
      {onRemove && !isUploading && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-0.5 right-0.5 h-5 w-5 p-0.5 opacity-50 group-hover:opacity-100 bg-destructive/30 hover:bg-destructive/50 text-destructive-foreground rounded-full"
          onClick={onRemove}
          aria-label="Remove attachment"
        >
          <X className="h-3 w-3" />
        </Button>
      )}
    </div>
  );
}
