import { useState } from 'react';

export const initialArtifactData = {
  documentId: 'init',
  title: '',
  kind: 'text',
  content: '',
  isVisible: false,
  status: 'idle',
};

export function useArtifact() {
  const [artifact, setArtifact] = useState(initialArtifactData);
  const [metadata, setMetadata] = useState<any>({});
  return { artifact, setArtifact, metadata, setMetadata };
}

export function useArtifactSelector<T>(selector: (state: typeof initialArtifactData) => T): T {
  return selector(initialArtifactData);
}