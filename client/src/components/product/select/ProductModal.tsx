import { getProductOptions } from "@apis/product";
import Modal from "@components/custom/Modal";
import Product from "@kiosk/common/types/product";
import React, { useEffect, useState } from "react";
import ProductInfo from "./ProductInfo";
import { CloseButton } from "./ProductModal.style";
import ProductOption from "@components/product/option";
import { useOptionDispatch } from "@hooks/store/option";
import { optionInit, optionPickClear } from "@src/stores/option";
import ProductCount from "./ProductCount";
import ProductButtons from "./ProductButtons";

type ProductModalPropsType = {
  product: Product;
  isOpen: boolean;
  closeModal: () => void;
};

const ProductModal: React.FC<ProductModalPropsType> = ({ product, isOpen, closeModal }) => {
  const optionDispatch = useOptionDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (isOpen && isLoading) {
      (async () => {
        const data = await getProductOptions(product.id);
        optionDispatch(optionInit({ options: data }));
        setIsLoading(false);
      })();
    } else if (!isOpen && !isLoading) {
      optionDispatch(optionPickClear());
    }
  }, [isLoading, isOpen]);

  if (isLoading) return <></>;
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <CloseButton onClick={closeModal} />
      <ProductInfo product={product} />
      <ProductCount />
      <ProductOption />
      <ProductButtons product={product} closeModal={closeModal} />
    </Modal>
  );
};

export default ProductModal;
