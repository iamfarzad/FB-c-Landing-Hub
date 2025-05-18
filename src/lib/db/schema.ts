export type Document = {
  id: string;
  title?: string;
  content?: string;
  createdAt?: string;
};

export type Vote = {
  id: string;
  chatId: string;
  messageId: string;
  vote: 'up' | 'down';
};

export type Suggestion = {
  id: string;
  documentId: string;
  selectionStart?: number;
  selectionEnd?: number;
};