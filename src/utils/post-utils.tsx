import { Post, PostMetadata } from "./types";

export const extractMetadata = (post: Post): PostMetadata => ({
  title: post.title,
  date: post.date,
  tags: post.tags,
  slug: post.slug,
  summary: post.summary,
});

type Groupped = {
  [key: string]: Post[];
};

export const groupByYear = (posts: Post[]) => {
  const groupped: Groupped = {};

  posts.forEach((post) => {
    const year = new Date(post.date * 1000).getFullYear();

    if (!groupped[year]) {
      groupped[year] = [];
    }

    groupped[year].push(post);
  });

  return groupped;
};
