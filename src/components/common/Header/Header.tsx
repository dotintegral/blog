import styled from "styled-components";
import { Spacer } from "../Spacer/Spacer";

const HeaderWrapper = styled.div`
  margin: 12px 0;
`;

const HeaderTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
  line-height: 42px;
  text-align: center;
`;

const HeaderSubtitle = styled.div`
  color: #909090;
  text-align: center;
`;

export const Header: React.FC = () => (
  <HeaderWrapper>
    <HeaderTitle>Artur Siery's Code Blog</HeaderTitle>
    <HeaderSubtitle>Thoughs on coding</HeaderSubtitle>
    <Spacer />
  </HeaderWrapper>
);
