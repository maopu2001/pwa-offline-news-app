'use client';
import { News } from '@/types/News';
import { getNews } from '@/lib/getNews';
import { NewsOverlay } from '@/components/NewsCard';
import { NewsCardSkeleton } from '@/components/NewsCardSkeleton';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';

export const TopHeadlinesTab = () => {
  const [headlines, setHeadlines] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchHeadlines = async () => {
      setIsLoading(true);
      try {
        const headlines = await getNews('top-headlines', { country: 'us', pageSize: '30' });
        setHeadlines(headlines);
        localStorage.setItem('headlines', JSON.stringify(headlines));
      } catch (error) {
        const savedData = localStorage.getItem('headlines');
        if (savedData) {
          const headlines = JSON.parse(savedData as string);
          setHeadlines(headlines);
        } else {
          toast.error('Failed to load Top Headlines');
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchHeadlines();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4 px-4">
      {isLoading
        ? Array.from({ length: 12 }).map((_, index) => <NewsCardSkeleton key={index} />)
        : headlines?.map((news: News) => <NewsOverlay key={news.url} news={news} />)}
    </div>
  );
};
