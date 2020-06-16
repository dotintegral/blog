import styled from "styled-components";

const PageWrapper = styled.div`
  max-width: 1400px;
  margin: 0px auto;
  display: flex;
  align-items: flex-start;
`;

const MenuWrapper = styled.div`
  background: white;
  padding: 24px 18px;
  margin-left: 12px;
  flex: 1 200px;
`;

const ContentWrapper = styled.div`
  background: white;
  padding: 24px 18px;
  flex: 1 1200px;
`;

export const PageLayout: React.FC = ({ children }) => {
  return (
    <PageWrapper>
      <ContentWrapper>{children}</ContentWrapper>
      <MenuWrapper>Menu</MenuWrapper>
    </PageWrapper>
  );
};
