import ReactMarkdown from "react-markdown/with-html";

import { CodeRenderer } from "./renderers/CodeRenderer";
import { ImageRenderer } from "./renderers/ImageRenderer";

interface MarkdownProps {
  source: string;
  slug: string;
}

export const MarkdownRenderer: React.FC<MarkdownProps> = ({ source, slug }) => {
  const renderers = {
    code: CodeRenderer,
    image: ImageRenderer(slug),
  };

  return <ReactMarkdown source={source} renderers={renderers} />;
};
