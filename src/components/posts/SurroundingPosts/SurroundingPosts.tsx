import styled from "styled-components";
import { SurroundingPosts, Post, PostMetadata } from "../../../utils/types";
import { MarkdownRenderer } from "../MarkdownRenderer/MarkdownRenderer";
import { PostLink } from "../../common/PostLinik/PostLink";
import { PostTeaser } from "../PostTeaser/PostTeaser";

export interface SurroundingPostsProps {
  surroundingPosts: SurroundingPosts;
}

export const Wrapper = styled.div`
  margin: 24px 0;
  display: flex;
  justify-content: space-between;
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
