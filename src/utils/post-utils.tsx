import { Post, PostMetadata } from "./types";

export const extractMetadata = (post: Post): PostMetadata => ({
  title: post.title,
  date: post.date,
  tags: post.tags,
  slug: post.slug,
  description: post.description,
  published: post.published,
  cover_image: post.cover_image,
});

type Groupped = {
  [key: string]: PostMetadata[];
};

export const groupByYear = (posts: PostMetadata[]) => {
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

export const getCoverImage = (slug: string, cover: string) => {
  return "/api/img/" + slug + "/" + cover;
};

export const getImageUrl = (slug: string, src: string) => {
  const remoteUrl = /^https?:\/\/.*$/.test(src);

  if (remoteUrl) {
    return src;
  }

  return "/api/img/" + slug + "/" + src;
};
