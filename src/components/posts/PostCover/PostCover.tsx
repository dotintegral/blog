import styled from "styled-components";
import { PostMetadata } from "../../../utils/types";
import { getCoverImage } from "../../../utils/post-utils";

interface PostCoverProps {
  post: PostMetadata;
  cover: string;
}

const Cover = styled.div`
  margin: 0 -60px;

  & > img {
    width: 100%;
  }
`;

export const PostCover: React.FC<PostCoverProps> = ({ post, cover }) => {
  if (!cover) {
    return <></>;
  }

  return (
    <Cover>
      <img src={getCoverImage(post.slug, cover)} />
    </Cover>
  );
};
