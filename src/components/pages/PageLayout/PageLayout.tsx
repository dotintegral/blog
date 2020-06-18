import styled from "styled-components";
import { Header } from "../Header/Header";
import { Spacer } from "../../common/Spacer/Spacer";
import { Menu } from "../Menu/Menu";

const Page = styled.div`
  max-width: 1400px;
  margin: 0px auto;
`;

const PageWrapper = styled.div`
  background: white;
  padding: 24px 18px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 16px;
`;

const ContentWrapper = styled.div``;

export const PageLayout: React.FC = ({ children }) => {
  return (
    <Page>
      <PageWrapper>
        <Header />
        <Menu />
        <ContentWrapper>{children}</ContentWrapper>
      </PageWrapper>
    </Page>
  );
};
