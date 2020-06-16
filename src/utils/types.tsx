export interface Post {
  attributes: {
    date: number;
    title: string;
    tags: string[];
  };
  body: string;
}
