import styled from "styled-components";
import { SurroundingPosts, Post } from "../../../utils/types";
import { MarkdownRenderer } from "../MarkdownRenderer/MarkdownRenderer";
import { Surrounding } from "../SurroundingPosts/SurroundingPosts";
import { format } from "../../../utils/date-formatter";
import { Spacer } from "../../common/Spacer/Spacer";

export interface PostPageProps {
  post: Post;
  surroundingPosts: SurroundingPosts;
}

const PostWrapper = styled.div`
  margin: 24px 0px;
`;

const PostTitle = styled.h1`
  margin-top: 0px;
`;

const PostDate = styled.div`
  text-align: right;
  color: #909090;
  font-size: 16px;
`;

export const PostPage: React.FC<PostPageProps> = ({
  post,
  surroundingPosts,
}) => {
  return (
    <PostWrapper>
      <PostDate>{format(post.date)}</PostDate>
      <PostTitle>{post.title}</PostTitle>
      <MarkdownRenderer source={post.body} />

      <Surrounding surroundingPosts={surroundingPosts} />
    </PostWrapper>
  );
};
