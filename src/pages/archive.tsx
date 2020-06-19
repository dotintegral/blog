import { getPosts } from "../utils/post-cache";
import { PostMetadata } from "../utils/types";
import { GetServerSideProps } from "next";
import { groupByYear, extractMetadata } from "../utils/post-utils";
import { YearPosts } from "../components/archive_2/YearPosts/YearPosts";
import styled from "styled-components";

interface ArchiveProps {
  posts: PostMetadata[];
}

const ArchiveWrapper = styled.div`
  padding-bottom: 60px;
`;

const Archive: React.FC<ArchiveProps> = ({ posts }) => {
  const groupped = groupByYear(posts);

  const years = Object.keys(groupped);
  years.reverse();

  const postByYears = years.map((year) => (
    <YearPosts year={year} posts={groupped[year]} key={year} />
  ));

  return (
    <ArchiveWrapper>
      <h1>Archive</h1>
      <div>{postByYears}</div>
    </ArchiveWrapper>
  );
};

export const getServerSideProps: GetServerSideProps<ArchiveProps> = async () => {
  const posts = getPosts().map(extractMetadata);
  return { props: { posts } };
};

export default Archive;
