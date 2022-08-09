export type CheckSelection = Set<number>;
export type CountSelection = { [id: number]: number };
export type RadioSelection = number;

export type OptionSelection = {
  [id: string]: RadioSelection | CheckSelection | CountSelection;
};
