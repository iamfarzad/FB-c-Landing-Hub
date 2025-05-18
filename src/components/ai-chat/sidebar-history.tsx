import { unstable_serialize } from 'swr/infinite';

export const CHAT_HISTORY_LIMIT = 10;

interface ChatHistoryItem {
  id: string;
  // Add other properties as needed
}

export function getChatHistoryPaginationKey(
  pageIndex: number,
  previousPageData: ChatHistoryItem[] | null
) {
  if (previousPageData && !previousPageData.length) return null;
  
  return unstable_serialize((pageIndex: number) => {
    return [
      'api/chat/history',
      {
        limit: CHAT_HISTORY_LIMIT,
        offset: pageIndex * CHAT_HISTORY_LIMIT,
      },
    ];
  });
}
