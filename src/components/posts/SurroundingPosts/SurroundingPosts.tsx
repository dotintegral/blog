import styled from "styled-components";
import { SurroundingPosts, PostMetadata } from "../../../utils/types";
import { PostTeaser } from "../PostTeaser/PostTeaser";

export interface SurroundingPostsProps {
  surroundingPosts: SurroundingPosts;
}

export const Wrapper = styled.div`
  margin: 36px 0 30px;
  padding-top: 36px;
  display: flex;
  justify-content: space-between;
  border-top: solid 1px #f0f0f0;
`;

const Prev: React.FC<{ post: PostMetadata }> = ({ post }) => (
  <PostTeaser post={post} headline="Previous post" />
);

const Next: React.FC<{ post: PostMetadata }> = ({ post }) => (
  <PostTeaser post={post} headline="Next post" />
);

export const Surrounding: React.FC<SurroundingPostsProps> = ({
  surroundingPosts,
}) => {
  const { prev, next } = surroundingPosts;

  return (
    <Wrapper>
      {prev ? <Prev post={prev} /> : <></>}
      {next ? <Next post={next} /> : <></>}
    </Wrapper>
  );
};
