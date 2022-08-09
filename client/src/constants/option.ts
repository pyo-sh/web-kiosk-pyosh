import Option from "@kiosk/common/types/option";

export type CheckSelection = Set<number>;
export type CountSelection = { [id: number]: number };
export type RadioSelection = number;

export type OptionGroup = Map<string, Option[]>;
export type OptionSelection = {
  [id: string]: RadioSelection | CheckSelection | CountSelection;
};
