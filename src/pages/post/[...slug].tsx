import { GetServerSideProps } from "next";
import { getPostBySlug, getSurroundingPosts } from "../../utils/post-cache";
import { Post, SurroundingPosts } from "../../utils/types";
import Page404 from "../../components/pages/404/404";
import { MarkdownRenderer } from "../../components/posts/MarkdownRenderer/MarkdownRenderer";
import { PostLink } from "../../components/common/PostLinik/PostLink";
import { PostBody } from "../../components/posts/PostBody/PostBody";

export interface PostPageProps {
  post: Post | null;
  surroundingPosts: SurroundingPosts;
}

const PostPage: React.FC<PostPageProps> = ({ post, surroundingPosts }) => {
  if (!post) {
    return <Page404 />;
  }

  return <PostBody post={post} surroundingPosts={surroundingPosts} />;
};

export const getServerSideProps: GetServerSideProps<PostPageProps> = async (
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
