import { getProductOptions } from "@apis/product";
import Modal from "@components/custom/Modal";
import Product from "@kiosk/common/types/product";
import React, { useContext, useEffect, useState } from "react";
import ProductInfo from "./ProductInfo";
import { ButtonWrapperDiv, CloseButton, ContainerDiv } from "./ProductModal.style";
import ProductOption from "@components/product/option";
import { useOptionDispatch } from "@hooks/store/option";
import { optionInit, optionPickClear } from "@src/stores/option";
import ProductCount from "./ProductCount";
import ProductButtons from "./ProductButtons";
import { MediaContext } from "@hooks/useMediaQuery";
import XIcon from "@icons/XIcon";
import { COLOR } from "@constants/style";

type ProductModalPropsType = {
  product: Product;
  isOpen: boolean;
  closeModal: () => void;
};

const ProductModal: React.FC<ProductModalPropsType> = ({ product, isOpen, closeModal }) => {
  const optionDispatch = useOptionDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isMobile = useContext(MediaContext);

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
      <ContainerDiv isMobile={isMobile}>
        <ButtonWrapperDiv>
          <CloseButton onClick={closeModal}>
            <XIcon color={COLOR.offWhite} />
          </CloseButton>
        </ButtonWrapperDiv>
        <div>
          <ProductInfo product={product} />
          <ProductCount />
        </div>
        <div>
          <ProductOption />
          <ProductButtons product={product} closeModal={closeModal} />
        </div>
      </ContainerDiv>
    </Modal>
  );
};

export default ProductModal;
