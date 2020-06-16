import { getPosts } from "../utils/post-cache";

const Home = () => {
  return <h1>Home</h1>;
};

export async function getServerSideProps() {
  const posts = getPosts();
  console.log(posts);
  return { props: { data: "test", posts } };
}

export default Home;
