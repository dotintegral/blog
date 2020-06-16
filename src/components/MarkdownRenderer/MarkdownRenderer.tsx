import ReactMarkdown from "react-markdown/with-html";

import { CodeRenderer } from "./CodeRenderer";

interface MarkdownProps {
  source: string;
}

const renderers = {
  code: CodeRenderer,
};

export const MarkdownRenderer: React.FC<MarkdownProps> = ({ source }) => {
  return (
    <div>
      <ReactMarkdown source={source} renderers={renderers} />
    </div>
  );
};
