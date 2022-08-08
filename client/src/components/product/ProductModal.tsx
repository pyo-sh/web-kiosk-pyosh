import { getProductOptions } from "@apis/product";
import Modal from "@components/custom/Modal";
import Option from "@kiosk/common/types/option";
import Product from "@kiosk/common/types/product";
import React, { useEffect, useState } from "react";
import { CloseButton } from "./ProductModal.style";

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
        setIsLoading(false);
        setOptions(data);
      })();
    }
  }, [isLoading, isOpen]);

  return (
    <Modal isOpen={isOpen}>
      <CloseButton onClick={closeModal} />
      <div>{JSON.stringify(product)}</div>
      <div>{JSON.stringify(options)}</div>
    </Modal>
  );
};

export default ProductModal;
