import { getPosts } from "../utils/post-cache";
import { Post } from "../utils/types";
import { GetServerSideProps } from "next";

interface HomeProps {
  posts: Post[];
}

const Home: React.FC<HomeProps> = ({ posts }) => {
  const postComponents = posts.map(({ title }, index) => (
    <div key={index}>
      <div>title: {title}</div>
    </div>
  ));

  return <div>{postComponents}</div>;
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const posts = getPosts();
  return { props: { posts } };
};

export default Home;
