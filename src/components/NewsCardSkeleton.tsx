import { Skeleton } from './ui/skeleton';

export const NewsCardSkeleton = () => {
  return (
    <Skeleton className="bg-accent/20 relative w-full aspect-video p-0 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full py-2 px-4">
        <Skeleton className="h-5 mb-2 w-4/5" />
        <Skeleton className="h-3 mb-1" />
        <Skeleton className="h-3 w-2/3" />
      </div>
    </Skeleton>
  );
};
