import { CheckSelection, CountSelection, OptionSelection } from "@constants/option";
import {
  PaymentBodyType,
  PaymentMethodEnum,
  PaymentOptionsType,
  PaymentProductType,
} from "@constants/payment";
import { CartState } from "@stores/cart";

export const refineCart = (
  { products: productsState }: CartState,
  { paymentMethod, paymentPrice }: { paymentMethod: PaymentMethodEnum; paymentPrice: number },
): PaymentBodyType => {
  const products = productsState.map(({ count, product, options }) => {
    const billProduct: PaymentProductType = {
      id: product.id,
      count,
      personalOptionIds: getOptionIds(options),
    };
    return billProduct;
  });

  return { products, paymentMethod, paymentPrice };
};

const getOptionIds = (options: OptionSelection): PaymentOptionsType[] => {
  return Object.values(options).reduce((acc: PaymentOptionsType[], opt) => {
    if (typeof opt === "number") acc.push({ id: opt });
    else if (opt instanceof Set) Array.from(opt.values(), (id) => acc.push({ id }));
    else
      Object.entries(opt).map(([id, count]) => {
        acc.push({ id: Number(id), count });
      });
    return acc;
  }, []);
};
