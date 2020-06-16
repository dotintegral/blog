import { GetServerSideProps } from "next";
import { getPostBySlug } from "../../utils/post-cache";
import { Post } from "../../utils/types";
import Page404 from "../../components/404/404";
import { MarkdownRenderer } from "../../components/MarkdownRenderer/MarkdownRenderer";

interface PostProps {
  post: Post | null;
}

const PostPage: React.FC<PostProps> = ({ post }) => {
  if (!post) {
    return <Page404 />;
  }

  const date = new Date(post.date * 1000);
  const formattedDate = date.toLocaleDateString();

  return (
    <div>
      <h1>{post.title}</h1>
      <div>{formattedDate}</div>
      <hr />
      <MarkdownRenderer source={post.body} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<PostProps> = async (
  ctx,
) => {
  const query = Array.isArray(ctx.query.slug)
    ? ctx.query.slug
    : [ctx.query.slug];
  const slug = query.join("-");
  const post = getPostBySlug(slug);

  return {
    props: {
      post,
    },
  };
};

export default PostPage;
