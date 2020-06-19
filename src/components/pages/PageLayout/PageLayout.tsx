import styled from "styled-components";
import { Header } from "../../common/Header/Header";
import { Menu } from "../../common/Menu/Menu";
import { Footer } from "../../common/Footer/Footer";
import { laptopUp } from "../../../utils/breakpoints";

const Page = styled.div`
  max-width: 1400px;
  margin: 12px auto;
`;

const PageWrapper = styled.div`
  background: white;
  padding: 24px 30px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 16px;

  ${laptopUp} {
    padding: 24px 60px;
  }
`;

const ContentWrapper = styled.div``;

export const PageLayout: React.FC = ({ children }) => {
  return (
    <Page>
      <PageWrapper>
        <Header />
        <Menu />
        <ContentWrapper>{children}</ContentWrapper>
        <Footer />
      </PageWrapper>
    </Page>
  );
};
