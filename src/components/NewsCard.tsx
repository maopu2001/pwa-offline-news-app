import { News } from '@/types/News';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export const NewsOverlay = ({ news }: { news: News }) => {
  if (!news.title || !news.urlToImage) return;

  const content = news.content?.split('[+')[0] || '';
  const formatedNews = { ...news, content };
  return (
    <Dialog>
      <DialogTrigger>
        <NewsCard news={formatedNews} />
      </DialogTrigger>
      <NewsDialogContent news={formatedNews} />
    </Dialog>
  );
};

const NewsCard = ({ news }: { news: News }) => {
  return (
    <Card className="group cursor-pointer relative w-full p-0 overflow-hidden flex flex-row gap-2 text-left">
      <div className="relative w-full aspect-video shrink-0">
        <Image priority className="object-cover" src={news.urlToImage} fill alt={news.title} />
      </div>
      <CardHeader className="group-hover:bg-black/50 transition-all duration-300 absolute bottom-0 left-0 z-10 w-full py-2 px-4 backdrop-blur-xs">
        <CardTitle className="md:text-lg line-clamp-2 text-white">{news.title}</CardTitle>
        <CardDescription className="text-white/70 text-xs md:text-sm">
          {news.author || 'Unknown Author'}
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

const NewsDialogContent = ({ news }: { news: News }) => {
  return (
    <DialogContent className="w-full lg:min-w-200 lg:min-h-120 p-10">
      <DialogHeader>
        <DialogTitle className="text-lg md:text-2xl">{news.title}</DialogTitle>
        <p className="text-sm md:text-base text-left">{news.description}</p>
        <DialogDescription className="relative w-full aspect-video shrink-0 rounded-md overflow-hidden">
          <Image priority className="object-cover" src={news.urlToImage} fill alt={news.title} />
        </DialogDescription>
      </DialogHeader>
      <p className="text-sm md:text-base">
        {news.content}
        <Link href={news.url} target="_blank" className="text-primary">
          Read more
        </Link>
      </p>
      <p className="text-muted-foreground text-sm md:text-base">
        {news.author && (
          <span>
            Author: {news.author} <br />
          </span>
        )}
        Published: {format(new Date(news.publishedAt), 'dd MMMM, yyyy; hh:mm a')}
      </p>
    </DialogContent>
  );
};
