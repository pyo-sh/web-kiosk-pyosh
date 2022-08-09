import React, { useState } from "react";
import Product from "@kiosk/common/types/product";
import ProductModal from "@components/product/select/ProductModal";
import { ContainerLI, Image } from "./ProductItem.style";
import { OptionProvider } from "@hooks/store/option";

type ProductItemPropsType = {
  product: Product;
};

const ProductItem: React.FC<ProductItemPropsType> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { name, image, price } = product;

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ContainerLI onClick={() => setIsModalOpen(true)}>
        <Image src={image} />
        <span>{name}</span>
        <span>{price}원</span>
      </ContainerLI>
      <OptionProvider>
        <ProductModal {...{ product, isOpen: isModalOpen, closeModal }} />
      </OptionProvider>
    </>
  );
};

export default ProductItem;
