import { GetServerSideProps } from "next";
import { Post } from "../../../utils/types";

interface YearPosts {
  year: string;
  posts: Post[];
}

export const YearPosts: React.FC<YearPosts> = ({ year, posts }) => {
  return (
    <div>
      <h2>{year}</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
