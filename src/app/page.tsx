import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TopHeadlinesTab } from '@/app/_components/TopHeadlinesTab';
import { SearchTab } from './_components/SearchTab';

export default function Home() {
  return (
    <Tabs defaultValue="headlines" className="w-full">
      <div className="bg-background w-full h-15 flex justify-center items-center sticky top-0 z-50">
        <TabsList className="max-w-8/10 w-150">
          <TabsTrigger className="font-bold" value="headlines">
            Headlines
          </TabsTrigger>
          <TabsTrigger className="font-bold" value="search">
            Search
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="headlines">
        <TopHeadlinesTab />
      </TabsContent>
      <TabsContent value="search">
        <SearchTab />
      </TabsContent>
    </Tabs>
  );
}
