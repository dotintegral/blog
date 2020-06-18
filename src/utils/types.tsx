export interface PostMetadata {
  date: number;
  title: string;
  tags: string[];
  slug: string;
  summary: string;
}

export interface Post extends PostMetadata {
  body: string;
}

export type SurroundingPosts = {
  prev: PostMetadata | null;
  next: PostMetadata | null;
};
