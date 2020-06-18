import styled from "styled-components";

interface CodeRendererProps {
  language: string | undefined;
  value: string;
}

const Code = styled.code`
  display: block;
  background: #fafafa;
  text-decoration: none;
  border-radius: 8px;
  padding: 12px 24px;

  * {
    font-family: "Source Code Pro", monospace !important;
    font-size: 18px;
    color: #404040;
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
