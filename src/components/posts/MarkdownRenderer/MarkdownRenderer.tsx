import ReactMarkdown from "react-markdown/with-html";

import { CodeRenderer } from "./renderers/CodeRenderer";

interface MarkdownProps {
  source: string;
}

const renderers = {
  code: CodeRenderer,
};

export const MarkdownRenderer: React.FC<MarkdownProps> = ({ source }) => {
  return <ReactMarkdown source={source} renderers={renderers} />;
};
