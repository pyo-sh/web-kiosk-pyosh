export enum OptionEnum {
  RADIO = "radio",
  CHECK = "check",
  COUNT = "count",
}

type OptionType = {
  id: number;
  name: string;
  price: number;
  optionType: OptionEnum;
  category: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
};

export default OptionType;
