import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateUUID(): string {
  // @ts-ignore
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}
export async function fetcher(input: RequestInfo, init?: RequestInit) {
  const res = await fetch(input, init);
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    (error as any).status = res.status;
    throw error;
  }
  return res.json();
}

export async function fetchWithErrorHandlers(input: RequestInfo, init?: RequestInit) {
  const res = await fetch(input, init);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.message || 'An error occurred.');
  }
  return data;
}

export function sanitizeText(text: string): string {
  return text.replace(/^\s+|\s+$/g, '');
}

export function getDocumentTimestampByIndex<T extends { createdAt?: string }>(
  documents: T[],
  index: number
): string {
  const doc = documents?.[index];
  return doc?.createdAt ?? '';
}
