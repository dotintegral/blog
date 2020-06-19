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
  margin-right: 12px;
`;

export const YearPosts: React.FC<YearPosts> = ({ year, posts }) => {
  return (
    <div>
      <h2>{year}</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <PublishedDate>{format(post.date)}</PublishedDate>
            <a href={getHref(post.slug)}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
