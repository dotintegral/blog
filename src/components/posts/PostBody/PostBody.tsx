import styled from "styled-components";
import { SurroundingPosts, Post } from "../../../utils/types";
import { MarkdownRenderer } from "../MarkdownRenderer/MarkdownRenderer";
import { Surrounding } from "../SurroundingPosts/SurroundingPosts";
import { format } from "../../../utils/date-formatter";

export interface PostProps {
  post: Post;
  surroundingPosts: SurroundingPosts;
}

export const PostWrapper = styled.div`
  margin: 24px 40px;
`;

export const PostBody: React.FC<PostProps> = ({ post, surroundingPosts }) => {
  return (
    <PostWrapper>
      <h1>{post.title}</h1>
      <div>{format(post.date)}</div>
      <hr />
      <MarkdownRenderer source={post.body} />

      <hr />
      <Surrounding surroundingPosts={surroundingPosts} />
    </PostWrapper>
  );
};
