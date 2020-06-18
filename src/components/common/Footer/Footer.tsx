import styled from "styled-components";

const FooterWrapper = styled.div`
  background: #505050;
  color: #f0f0f0;
  margin: 0 -60px -24px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 24px 60px;
  text-align: center;
`;

export const Footer = () => (
  <FooterWrapper>&#169; Artur Siery {new Date().getFullYear()}</FooterWrapper>
);
