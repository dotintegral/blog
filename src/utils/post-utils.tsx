import { Post, PostMetadata } from "./types";

export const extractMetadata = (post: Post): PostMetadata => ({
  title: post.title,
  date: post.date,
  tags: post.tags,
  slug: post.slug,
});
