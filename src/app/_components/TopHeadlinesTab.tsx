'use client';
import { News } from '@/types/News';
import { getNews } from '@/lib/getNews';
import { NewsOverlay } from '@/components/NewsCard';
import { useQuery } from 'react-query';
import { NewsCardSkeleton } from '@/components/NewsCardSkeleton';
import { toast } from 'sonner';
import { AxiosError } from 'axios';

export const TopHeadlinesTab = () => {
  const { data: headlines, isLoading } = useQuery({
    queryKey: ['headlines'],
    queryFn: () => getNews('top-headlines', { country: 'us' }),
    refetchInterval: 24 * 3600 * 1000, //1 day
    onError: (err) => toast.error('Failed to fetch Top Headlines'),
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4 px-4">
      {isLoading
        ? Array.from({ length: 12 }).map((_, index) => <NewsCardSkeleton key={index} />)
        : headlines?.map((news: News) => <NewsOverlay key={news.url} news={news} />)}
    </div>
  );
};
