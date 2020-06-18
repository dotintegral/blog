import styled from "styled-components";
import { PostMetadata } from "../../../utils/types";
import { getHref } from "../../common/PostLinik/PostLink";
import { format } from "../../../utils/date-formatter";

export const TeaserWrapper = styled.a`
  display: block;
  background: #fafafa;
  text-decoration: none;
  border-radius: 8px;
  flex: 0 48%;
  box-sizing: border-box;
  padding: 18px 24px;
  color: #000;
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
}

export const PostTeaser: React.FC<TeaserProps> = ({
  post,
  headline,
  summary = true,
}) => (
  <TeaserWrapper href={getHref(post.slug)}>
    <TeaserHeadline>{headline || format(post.date)}</TeaserHeadline>
    <TeaserTitle>{post.title}</TeaserTitle>
    {summary ? <TeaserSummary>{post.summary}</TeaserSummary> : <></>}
  </TeaserWrapper>
);
