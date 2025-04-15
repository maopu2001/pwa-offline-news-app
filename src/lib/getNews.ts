'use server';
import axios from 'axios';
import { toast } from 'sonner';

type Params = {
  [key: string]: string;
};

export const getNews = async (url: string, params: Params) => {
  const apiUrl = `${process.env.NEWS_API_URL}/${url}?${new URLSearchParams(params).toString()}${
    process.env.NEWS_API_KEY
  }`;
  return axios.get(apiUrl).then((res) => res.data.articles);
};
