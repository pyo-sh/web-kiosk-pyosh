import Product from "@kiosk/common/types/product";
import React, { useState } from "react";
import { ContainerLI, Image } from "./ProductItem.style";
import ProductModal from "./ProductModal";

type ProductItemPropsType = {
  product: Product;
};

const ProductItem: React.FC<ProductItemPropsType> = ({ product }) => {
  const [isModalShow, setIsModalShow] = useState<boolean>(false);
  const { name, image, price } = product;

  const closeModal = () => {
    setIsModalShow(false);
  };

  return (
    <>
      <ContainerLI onClick={() => setIsModalShow(true)}>
        <Image src={image} />
        <span>{name}</span>
        <span>{price}원</span>
      </ContainerLI>
      <ProductModal {...{ product, isOpen: isModalShow, closeModal }} />
    </>
  );
};

export default ProductItem;
