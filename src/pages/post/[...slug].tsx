import { GetServerSideProps } from "next";
import { getPostBySlug, getSurroundingPosts } from "../../utils/post-cache";
import { Post, SurroundingPosts } from "../../utils/types";
import Page404 from "../../components/pages/404/404";
import { MarkdownRenderer } from "../../components/post/MarkdownRenderer/MarkdownRenderer";
import { PostLink } from "../../components/common/PostLinik/PostLink";

interface PostProps {
  post: Post | null;
  surroundingPosts: SurroundingPosts;
}

const PostPage: React.FC<PostProps> = ({ post, surroundingPosts }) => {
  if (!post) {
    return <Page404 />;
  }

  const date = new Date(post.date * 1000);
  const formattedDate = date.toLocaleDateString();
  const { prev, next } = surroundingPosts;

  return (
    <div>
      <h1>{post.title}</h1>
      <div>{formattedDate}</div>
      <hr />
      <MarkdownRenderer source={post.body} />
      <hr />
      {prev ? (
        <>
          Prev:
          <PostLink slug={prev.slug} caption={prev.title} />
        </>
      ) : (
        <></>
      )}
      {next ? (
        <>
          Next:
          <PostLink slug={next.slug} caption={next.title} />
        </>
      ) : (
        <></>
      )}
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

  const surroundingPosts = getSurroundingPosts(slug);

  return {
    props: {
      post,
      surroundingPosts,
    },
  };
};

export default PostPage;
