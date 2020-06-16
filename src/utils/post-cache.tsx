import { Post } from "./types";
import { readPostsFromFiles } from "./post-reader";

let cache: Post[] = [];

export const updateCache = () => {
  cache = readPostsFromFiles();
};

export const getPosts = (): Post[] => {
  if (cache.length === 0) {
    console.log("Updating cache");
    updateCache();
  } else {
    console.log("Reading from cache");
  }

  return cache;
};
