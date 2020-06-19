import styled from "styled-components";
import { PostMetadata } from "../../../utils/types";
import { getCoverImage } from "../../../utils/post-utils";
import { laptopUp } from "../../../utils/breakpoints";

interface PostCoverProps {
  post: PostMetadata;
  cover: string;
}

const Cover = styled.div`
  margin: 0 -30px;

  & > img {
    width: 100%;
  }

  ${laptopUp} {
    margin: 0 -60px;
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
