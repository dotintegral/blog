import { PostMetadata } from "../../../utils/types";
import styled from "styled-components";
import { getHref } from "../../common/PostLinik/PostLink";
import { format } from "../../../utils/date-formatter";

interface YearPosts {
  year: string;
  posts: PostMetadata[];
}

const PublishedDate = styled.span`
  color: #909090;
`;

const Separator = styled.span`
  font-size: 14px;
  padding: 0 6px;
  color: #e0e0e0;
  position: relative;
  top: -3px;
`;

export const YearPosts: React.FC<YearPosts> = ({ year, posts }) => {
  return (
    <div>
      <h2>{year}</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <PublishedDate>{format(post.date)}</PublishedDate>
            <Separator>&#11042;</Separator>

            <a href={getHref(post.slug)}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
