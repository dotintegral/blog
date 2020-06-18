import fs from "fs";
import fm from "front-matter";
import { Post } from "./types";

const postDir = process.cwd() + "/data/posts";

interface ParsedPost {
  attributes: {
    date: Date;
    title: string;
    tags: string[];
    summary: string;
  };
  body: string;
}

const parsePost = (filename: string, data: string): Post => {
  const parsed = fm(data) as ParsedPost;
  const slug = filename.split(".")[0];

  const post: Post = {
    date: Math.round(parsed.attributes.date.valueOf() / 1000),
    title: parsed.attributes.title,
    tags: parsed.attributes.tags,
    body: parsed.body,
    summary: parsed.attributes.summary,
    slug,
  };

  return post;
};

export const readPostsFromFiles = () => {
  const postFiles = fs.readdirSync(postDir, "utf-8");

  const posts = postFiles
    .map((filename) => ({
      filename,
      postData: fs.readFileSync(postDir + "/" + filename, "utf-8"),
    }))
    .map(({ filename, postData }) => parsePost(filename, postData));

  posts.reverse();

  return posts;
};
