'use client';
import { NewsOverlay } from '@/components/NewsCard';
import { News } from '@/types/News';
import { Input } from '@/components/ui/input';
import { FormEvent, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useQuery, useQueryClient } from 'react-query';
import { getNews } from '@/lib/getNews';
import { NewsCardSkeleton } from '@/components/NewsCardSkeleton';

export const SearchTab = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const {
    data: searchResult,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['search'],
    queryFn: () => getNews('everything', { q: searchRef.current?.value || '' }),
    refetchInterval: 24 * 3600 * 1000, //1 day
    enabled: false,
    onError: () => toast.error('Failed to fetch Search Results'),
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!searchRef.current?.value) return toast.error('Search field is empty');
    queryClient.refetchQueries(['search']);
  };

  return (
    <div className="px-4 flex flex-col gap-4">
      <form className="flex justify-center items-center gap-2" onSubmit={handleSubmit}>
        <Input ref={searchRef} className="w-full md:w-1/2" type="text" placeholder="Search" />
        <Button className="cursor-pointer" type="submit">
          Search
        </Button>
      </form>
      {isLoading && !isError && (
        <p className="text-center">Showing search results for "{searchRef.current?.value}"</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4">
        {isLoading
          ? Array.from({ length: 12 }).map((_, index) => <NewsCardSkeleton key={index} />)
          : searchResult?.map((news: News) => <NewsOverlay key={news.url} news={news} />)}
      </div>
    </div>
  );
};
