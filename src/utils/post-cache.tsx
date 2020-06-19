import { Post, PostMetadata, SurroundingPosts } from "./types";
import { readPostsFromFiles } from "./post-reader";
import { extractMetadata } from "./post-utils";

let cache: Post[] = [];

export const updateCache = () => {
  console.log("Updating cache");
  cache = readPostsFromFiles();
};

export const getPosts = (): Post[] => {
  if (cache.length === 0) {
    updateCache();
  } else {
    console.log("Reading from cache");
  }

  return cache;
};

export const getPostBySlug = (postSlug: string): Post | null => {
  return getPosts().find(({ slug }) => slug === postSlug) || null;
};

export const getSurroundingPosts = (postSlug: string): SurroundingPosts => {
  const index = getPosts().findIndex(({ slug }) => slug === postSlug);

  if (index === -1) {
    return {
      prev: null,
      next: null,
    };
  }

  const prev = getPosts()[index + 1];
  const next = getPosts()[index - 1];

  return {
    prev: prev ? extractMetadata(prev) : null,
    next: next ? extractMetadata(next) : null,
  };
};
