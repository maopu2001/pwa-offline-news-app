'use client';
import { NewsOverlay } from '@/components/NewsCard';
import { News } from '@/types/News';
import { Input } from '@/components/ui/input';
import { FormEvent, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { getNews } from '@/lib/getNews';
import { NewsCardSkeleton } from '@/components/NewsCardSkeleton';
import { useState } from 'react';
import useInternetStatus from '@/hooks/useConnectionStatus';

export const SearchTab = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const isOnline = useInternetStatus();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!searchRef.current?.value) return toast.error('Search field is empty');
      const searchResult = await getNews('everything', { q: searchRef.current?.value || '' });
      setSearchResult(searchResult);
      toast.success('Search results loaded');
    } catch (error) {
      toast.error('Failed to fetch Search Results');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="px-4 flex flex-col gap-4">
      <form className="flex justify-center items-center gap-2" onSubmit={handleSubmit}>
        <Input
          ref={searchRef}
          className="w-full md:w-1/2"
          type="text"
          placeholder="Search"
          disabled={!isOnline}
        />
        <Button className="cursor-pointer" type="submit" disabled={!isOnline}>
          Search
        </Button>
      </form>
      {(isLoading || searchResult.length > 0) && (
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
