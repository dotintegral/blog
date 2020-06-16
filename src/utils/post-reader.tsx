import fs from "fs";
import fm from "front-matter";
import { Post } from "./types";

const postDir = process.cwd() + "/data/posts";

interface ParsedPost {
  attributes: {
    date: Date;
    title: string;
    tags: string[];
  };
  body: string;
}

const parsePost = (data: string): Post => {
  const parsed = fm(data) as ParsedPost;

  const post: Post = {
    attributes: {
      date: Math.round(parsed.attributes.date.valueOf() / 1000),
      title: parsed.attributes.title,
      tags: parsed.attributes.tags,
    },
    body: parsed.body,
  };

  return post;
};

export const readPostsFromFiles = () => {
  const postFiles = fs.readdirSync(postDir, "utf-8");

  const posts = postFiles
    .map((file) => fs.readFileSync(postDir + "/" + file, "utf-8"))
    .map((postData) => parsePost(postData));

  posts.reverse();

  return posts;
};
