import styled from "styled-components";
import { PostMetadata } from "../../../utils/types";
import { getHref } from "../../common/PostLinik/PostLink";
import { format } from "../../../utils/date-formatter";

export const TeaserWrapper = styled.a`
  display: block;
  background: #fafafa;
  text-decoration: none;
  border-radius: 8px;
  flex: 0 0 49%;
  box-sizing: border-box;
  padding: 18px 24px;
  color: #000;

  &:hover {
    color: #000;
  }
`;

const TeaserHeadline = styled.div`
  color: #909090;
  font-size: 16px;
`;

const TeaserTitle = styled.div`
  font-size: 24px;
  line-height: 30px;
`;

const TeaserSummary = styled.div`
  color: #303030;
  margin-top: 12px;
`;

export const EmptyTeaser = styled.div`
  display: block;
  flex: 0 48%;
  box-sizing: border-box;
`;

interface TeaserProps {
  post: PostMetadata;
  headline?: string;
  summary?: boolean;
  headlineAlign?: "left" | "right";
}

export const PostTeaser: React.FC<TeaserProps> = ({
  post,
  headline,
  headlineAlign = "right",
  summary = true,
}) => (
  <TeaserWrapper href={getHref(post.slug)}>
    <TeaserHeadline style={{ textAlign: headlineAlign }}>
      {headline || format(post.date)}
    </TeaserHeadline>
    <TeaserTitle>{post.title}</TeaserTitle>
    {summary ? <TeaserSummary>{post.description}</TeaserSummary> : <></>}
  </TeaserWrapper>
);
