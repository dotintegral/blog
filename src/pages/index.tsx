import { getPosts } from "../utils/post-cache";
import { Post } from "../utils/types";
import { GetServerSideProps } from "next";
import { HomePage } from "../components/pages/HomePage/HomePage";

interface HomeProps {
  posts: Post[];
}

const Home: React.FC<HomeProps> = ({ posts }) => {
  return <HomePage posts={posts} />;
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const posts = getPosts().slice(0, 10);
  return { props: { posts } };
};

export default Home;
