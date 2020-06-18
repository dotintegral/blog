import styled from "styled-components";
import { Post } from "../../../utils/types";
import { PostTeaser } from "../PostTeaser/PostTeaser";

interface HomePageProps {
  posts: Post[];
}

const HomePosts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 30px 0;

  & > * {
    margin-bottom: 30px;
  }
`;

export const HomePage: React.FC<HomePageProps> = ({ posts }) => {
  return (
    <HomePosts>
      {posts.map((post, index) => (
        <PostTeaser post={post} key={index} />
      ))}
    </HomePosts>
  );
};
