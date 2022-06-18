import request from "../utils/request";

export interface Article {
  id: string;
  title: string;
  avatar: string;
  author: string;
  content: string;
}

export interface ArticleItem {
  id: string;
  author: string;
  createTime: string;
  categoryList: string[];
  title: string;
  content: string;
  viewNum: string;
  loveNum: string;
  commentNum: string;
}

export type Articles = ArticleItem[];

interface ResponseType<T> {
  code: number;
  data: T;
}

export const reqGetArticles = () => {
  return request.get<ResponseType<Articles>>(`/articles`);
};

export const reqGetArticleDetail = (id: number) => {
  return request.get<ResponseType<Article>>(`/article/${id}`);
};
