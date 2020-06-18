interface PostLink {
  slug: string;
  caption: string;
}

export const getHref = (slug: string) => {
  const result = /^(\d{4}-\d{2}-\d{2})-(.*)$/.exec(slug);

  if (!result) {
    return `/post/${slug}`;
  }

  return `/post/${result[1]}/${result[2]}`;
};

export const PostLink: React.FC<PostLink> = ({ slug, caption }) => {
  const href = getHref(slug);

  return <a href={href}>{caption}</a>;
};
