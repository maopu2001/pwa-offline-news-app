import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TopHeadlinesTab } from '@/app/_components/TopHeadlinesTab';
import { SearchTab } from './_components/SearchTab';
import CheckConnection from './_components/CheckConnection';
import ThemeChanger from './_components/ThemeChanger';

export default function Home() {
  return (
    <Tabs defaultValue="headlines" className="w-full gap-0">
      <div className="bg-background w-full h-15 flex justify-center items-center sticky top-0 z-50">
        <CheckConnection />
        <TabsList className="max-w-8/10 w-150">
          <TabsTrigger className="font-bold" value="headlines">
            Headlines
          </TabsTrigger>
          <TabsTrigger className="font-bold" value="search">
            Search
          </TabsTrigger>
        </TabsList>
        <ThemeChanger />
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
