import { getImageUrl } from "../../../../utils/post-utils";

interface ImageRendererProps {
  alt: string | undefined;
  src: string;
}

export const ImageRenderer: (slug: string) => React.FC<ImageRendererProps> = (
  slug,
) => ({ src, alt = "image" }) => {
  const imageSrc = getImageUrl(slug, src);

  return <img src={imageSrc} alt={alt} />;
};
