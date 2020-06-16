import { getAllPosts } from "../utils/post-reader";

const Home = () => {
  return <h1>Home</h1>;
};

export async function getServerSideProps() {
  const posts = getAllPosts();
  console.log(posts);
  return { props: { data: "test", posts } };
}

export default Home;
