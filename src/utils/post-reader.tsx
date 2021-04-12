import fs from "fs";
import read from "fs-readdir-recursive";
import fm from "front-matter";
import { Post } from "./types";

const developPostDir = process.cwd() + "/../blog-data/posts/";
const productionPostDir = process.cwd() + "/data/posts/";
const developmentMode = process.env.NODE_ENV === "development";

const postDir = developmentMode ? developPostDir : productionPostDir;

interface ParsedPost {
  attributes: {
    date: Date;
    title: string;
    tags: string[];
    description: string;
    published: boolean;
    cover_image: string;
  };
  body: string;
}

const parsePost = (filename: string, data: string): Post => {
  const parsed = fm(data) as ParsedPost;
  const slug = filename.split("/")[0];

  const post: Post = {
    date: Math.round(parsed.attributes.date.valueOf() / 1000),
    title: parsed.attributes.title,
    tags: parsed.attributes.tags,
    body: parsed.body,
    description: parsed.attributes.description,
    published: parsed.attributes.published,
    cover_image: parsed.attributes.cover_image,
    slug,
  };

  return post;
};

export const readPostsFromFiles = () => {
  const postFiles = read(postDir).filter((filename) =>
    /\d{4}-\d{2}-\d{2}-.*\/post.md/i.test(filename),
  );

  const posts = postFiles
    .map((filename) => ({
      filename,
      postData: fs.readFileSync(postDir + filename, "utf-8"),
    }))
    .map(({ filename, postData }) => parsePost(filename, postData))
    .filter((post) => post.published);

  posts.reverse();

  return posts;
};
