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
  const posts = fs.readdirSync(postDir, "utf-8");
  const firstPost = fs.readFileSync(postDir + "/" + posts[0], "utf-8");
  const post = parsePost(firstPost);

  return [post];
};
