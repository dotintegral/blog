import { getPosts } from "../utils/post-cache";
import { Post } from "../utils/types";
import { GetServerSideProps } from "next";
import { groupByYear } from "../utils/post-utils";
import { YearPosts } from "../components/Archive/YearPosts/YearPosts";

interface ArchiveProps {
  posts: Post[];
}

const Archive: React.FC<ArchiveProps> = ({ posts }) => {
  const groupped = groupByYear(posts);

  const years = Object.keys(groupped);
  years.reverse();

  const postByYears = years.map((year) => (
    <YearPosts year={year} posts={groupped[year]} />
  ));

  return (
    <div>
      <h1>Archive</h1>
      <div>{postByYears}</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<ArchiveProps> = async () => {
  const posts = getPosts();
  return { props: { posts } };
};

export default Archive;
