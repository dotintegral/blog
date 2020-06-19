import styled from "styled-components";
import { Post } from "../../../utils/types";
import { PostTeaser } from "../../posts/PostTeaser/PostTeaser";
import { PostGrid } from "../../posts/PostGrid/PostGrid";

interface HomePageProps {
  posts: Post[];
}

export const HomePage: React.FC<HomePageProps> = ({ posts }) => {
  return (
    <>
      <h1>Latest publications</h1>
      <PostGrid>
        {posts.map((post, index) => (
          <PostTeaser post={post} key={index} />
        ))}
      </PostGrid>
    </>
  );
};
