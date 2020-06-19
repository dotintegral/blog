import Highlight from "react-highlight.js";
import styled from "styled-components";

interface CodeRendererProps {
  language: string | undefined;
  value: string;
}

const Code = styled(Highlight)`
  code {
    padding: 12px 24px;
    font-family: "Source Code Pro", monospace !important;
    font-size: 18px;
    border-radius: 4px;
  }
`;

export const CodeRenderer: React.FC<CodeRendererProps> = ({
  value,
  language,
}) => {
  return <Code language={language || ""}>{value}</Code>;
};
