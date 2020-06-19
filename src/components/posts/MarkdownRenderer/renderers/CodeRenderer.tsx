import Highlight from "react-highlight.js";
import styled from "styled-components";
import { laptopUp, tabletUp, mobileUp } from "../../../../utils/breakpoints";

interface CodeRendererProps {
  language: string | undefined;
  value: string;
}

const Code = styled(Highlight)`
  code {
    padding: 12px 24px;
    font-family: "Fira Code", monospace !important;
    font-size: 12px;
    border-radius: 4px;
    margin: 0px -30px;

    ${mobileUp} {
      font-size: 14px;
    }

    ${tabletUp} {
      font-size: 16px;
    }

    ${laptopUp} {
      font-size: 18px;
      margin: 0px 0px;
    }
  }
`;

export const CodeRenderer: React.FC<CodeRendererProps> = ({
  value,
  language,
}) => {
  return <Code language={language || ""}>{value}</Code>;
};
