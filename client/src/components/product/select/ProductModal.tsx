import { getProductOptions } from "@apis/product";
import Modal from "@components/custom/Modal";
import Option from "@kiosk/common/types/option";
import Product from "@kiosk/common/types/product";
import React, { useEffect, useState } from "react";
import ProductInfo from "./ProductInfo";
import { CloseButton } from "./ProductModal.style";
import ProductOption from "@components/product/option";

type ProductModalPropsType = {
  product: Product;
  isOpen: boolean;
  closeModal: () => void;
};

const ProductModal: React.FC<ProductModalPropsType> = ({ product, isOpen, closeModal }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    if (isOpen && isLoading) {
      (async () => {
        const data = await getProductOptions(product.id);
        setOptions(data);
        setIsLoading(false);
      })();
    }
  }, [isLoading, isOpen]);

  if (isLoading) return <></>;
  return (
    <Modal isOpen={isOpen}>
      <CloseButton onClick={closeModal} />
      <ProductInfo product={product} />
      <ProductOption options={options} />
    </Modal>
  );
};

export default ProductModal;
