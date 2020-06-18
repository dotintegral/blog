import { GetServerSideProps } from "next";
import { getPostBySlug, getSurroundingPosts } from "../../utils/post-cache";
import { Post as PostType, SurroundingPosts } from "../../utils/types";
import Page404 from "../../components/pages/404/404";
import { MarkdownRenderer } from "../../components/posts/MarkdownRenderer/MarkdownRenderer";
import { PostLink } from "../../components/common/PostLinik/PostLink";
import { PostPage } from "../../components/pages/PostPage/PostPage";

export interface PostPageProps {
  post: PostType | null;
  surroundingPosts: SurroundingPosts;
}

const Post: React.FC<PostPageProps> = ({ post, surroundingPosts }) => {
  if (!post) {
    return <Page404 />;
  }

  return <PostPage post={post} surroundingPosts={surroundingPosts} />;
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

export default Post;
