import styled from "styled-components";

interface CodeRendererProps {
  language: string | undefined;
  value: string;
}

const Code = styled.code`
  * {
    font-family: "Source Code Pro", monospace !important;
    font-size: 18px;
  }
`;

export const CodeRenderer: React.FC<CodeRendererProps> = ({
  value,
  language,
}) => {
  return (
    <Code>
      <pre>{value}</pre>
    </Code>
  );
};
