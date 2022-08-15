import styled from "@emotion/styled";
import { BOX_SHADOW, TEXT_BOLD_LARGE } from "@constants/style";
import { TRANSFORM_MAIN_ARRAY, TRANSFORM_SUB_ARRAY } from "@constants/transform";

export const ContainerLI = styled.li<{ rand: number }>`
  ${BOX_SHADOW}
  padding: 17px;
  margin: 10px;

  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
  aspect-ratio: 1/1;

  /* &:hover {
    ${(props) => TRANSFORM_MAIN_ARRAY[Math.floor(TRANSFORM_MAIN_ARRAY.length * props.rand)]}
    ${(props) => TRANSFORM_SUB_ARRAY[Math.floor(TRANSFORM_SUB_ARRAY.length * props.rand)]}
  } */
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  aspect-ratio: 1/1;
`;

export const Title = styled.h3`
  ${TEXT_BOLD_LARGE}
  padding: 0;
  margin: 10px 0 0 0;

  text-align: center;
  word-break: break-all;
`;

export const Price = styled.span`
  margin-top: auto;
  text-align: center;
  word-break: break-all;
`;
