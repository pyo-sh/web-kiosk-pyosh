import { BOX_SHADOW, COLOR } from "@constants/style";
import styled from "@emotion/styled";

export const ContainerUL = styled.ul`
  flex: 1 1 0;
  padding: 8px;
  margin: 0 0 10px 0;
  list-style: none;

  background-color: ${COLOR.offWhite};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
