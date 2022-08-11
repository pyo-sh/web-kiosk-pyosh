import { COLOR, TEXT_BODY_MEDIUM } from "@constants/style";
import styled from "@emotion/styled";

export const ContainerDiv = styled.div`
  padding: 0 20px;
`;

export const OptionContainerDiv = styled.div`
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid ${COLOR.line};

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  row-gap: 4px;
  &:last-child {
    margin-top: 10px;
    padding-top: 10px;
    border-bottom: none;
  }
`;

export const OptionTitleH3 = styled.h3`
  ${TEXT_BODY_MEDIUM}
  padding: 0;
  margin: 0 0 8px;
`;
