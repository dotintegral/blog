import styled from "styled-components";
import { Spacer } from "../Spacer/Spacer";

const MenuWrapper = styled.div``;

const MenuContainer = styled.div`
  margin: 0px 0px -12px;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const MenuSeparator = styled.div`
  display: block;
  font-size: 14px;
  padding: 0 18px;
  color: #e0e0e0;
`;

const MenuItem = styled.a`
  display: block;
  text-decoration: none;
  color: #ef5350;
  transition: color linear 0.3s;

  &:hover {
    color: #ffca28;
  }
`;

export const Menu: React.FC = () => (
  <MenuWrapper>
    <MenuContainer>
      <MenuItem href="/">Home</MenuItem>
      <MenuSeparator>&#11042;</MenuSeparator>
      <MenuItem href="/archive">Archive</MenuItem>
    </MenuContainer>
    <Spacer />
  </MenuWrapper>
);
