import styled from "styled-components";

const PageWrapper = styled.div`
  max-width: 1400px;
  margin: 0px auto;
`;

const ContentWrapper = styled.div`
  background: white;
  padding: 24px 18px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 16px;
`;

export const PageLayout: React.FC = ({ children }) => {
  return (
    <PageWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </PageWrapper>
  );
};
