import styled from "@emotion/styled";

export const ContainerUL = styled.ul`
  flex: 0 0 auto;
  margin: 0;
  padding: 15px;
  width: 100%;
  height: 100%;

  display: grid;
  justify-content: center;
  align-content: start;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (min-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 730px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 860px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
