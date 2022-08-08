import styled from "@emotion/styled";

export const ContainerUL = styled.ul`
  margin: 0;
  padding: 15px;
  flex: 1;

  display: grid;
  @media screen and (min-width: 520px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 730px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 920px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
