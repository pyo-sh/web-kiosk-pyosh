import React, { useContext, useEffect, useState } from "react";
import {
  ButtonWrapperDiv,
  CloseButton,
  ContainerDiv,
  ModalExitAnimateCSS,
  ModalShowAnimateCSS,
} from "./ProductModal.style";
import Product from "@kiosk/common/types/product";
import Modal from "@components/custom/Modal";
import ProductInfo from "./ProductInfo";
import ProductOption from "@components/product/option";
import ProductCount from "./ProductCount";
import ProductButtons from "./ProductButtons";
import XIcon from "@icons/XIcon";
import { getProductOptions } from "@apis/product";
import { optionInit, optionPickClear } from "@src/stores/option";
import { useOptionDispatch } from "@hooks/store/option";
import { MediaContext } from "@hooks/useMediaQuery";
import { COLOR } from "@constants/style";

type ProductModalPropsType = {
  product: Product;
  isOpen: boolean;
  closeModal: () => void;
};

const ProductModal: React.FC<ProductModalPropsType> = ({ product, isOpen, closeModal }) => {
  const optionDispatch = useOptionDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isOffFired, setIsOffFired] = useState<boolean>(false);
  const isMobile = useContext(MediaContext);

  const fireCloseAnimate = () => {
    setIsOffFired(true);
  };

  const onFireClose = () => {
    if (isOffFired) {
      setIsOffFired(false);
      closeModal();
    }
  };

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

  const ModalAnimation = isOffFired ? ModalExitAnimateCSS : ModalShowAnimateCSS;
  return (
    <Modal
      onAnimationEnd={onFireClose}
      className={ModalAnimation}
      isOpen={isOpen}
      closeModal={fireCloseAnimate}
    >
      <ContainerDiv isMobile={isMobile}>
        <ButtonWrapperDiv>
          <CloseButton onClick={fireCloseAnimate}>
            <XIcon color={COLOR.offWhite} />
          </CloseButton>
        </ButtonWrapperDiv>
        <div>
          <ProductInfo product={product} />
          <ProductCount />
        </div>
        <div>
          <ProductOption />
          <ProductButtons product={product} closeModal={fireCloseAnimate} />
        </div>
      </ContainerDiv>
    </Modal>
  );
};

export default ProductModal;
