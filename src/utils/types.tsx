export interface PostMetadata {
  date: number;
  title: string;
  tags: string[];
  slug: string;
  published: boolean;
  description: string;
  cover_image: string;
}

export interface Post extends PostMetadata {
  body: string;
}

export type SurroundingPosts = {
  prev: PostMetadata | null;
  next: PostMetadata | null;
};
