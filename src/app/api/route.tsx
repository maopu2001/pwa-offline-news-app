import { NextResponse } from 'next/server';
import { parse } from 'rss-to-json';

export async function GET() {
  const rss = await parse('https://rss.nytimes.com/services/xml/rss/nyt/World.xml');
  return NextResponse.json(rss);
}
