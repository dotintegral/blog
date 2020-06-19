import styled from "styled-components";

export const PostGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 30px 0;

  & > * {
    margin-bottom: 30px;
  }
`;
