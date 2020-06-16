interface CodeRendererProps {
  language: string | undefined;
  value: string;
}

export const CodeRenderer: React.FC<CodeRendererProps> = ({
  value,
  language,
}) => {
  return (
    <div>
      <p>language: {language}</p>
      <pre>{value}</pre>
    </div>
  );
};
