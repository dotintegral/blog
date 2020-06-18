import styled from "styled-components";

const PageWrapper = styled.div`
  max-width: 1400px;
  margin: 0px auto;
`;

const ContentWrapper = styled.div`
  background: white;
  padding: 24px 18px;
`;

export const PageLayout: React.FC = ({ children }) => {
  return (
    <PageWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </PageWrapper>
  );
};
