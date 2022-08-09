export enum OptionType {
  RADIO = "radio",
  CHECK = "check",
  COUNT = "count",
}

type Option = {
  id: number;
  name: string;
  price: number;
  optionType: OptionType;
  category: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
};

export default Option;
