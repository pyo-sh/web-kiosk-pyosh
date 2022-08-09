import { OptionSelection } from "@constants/option";
import Option from "@kiosk/common/types/option";

export const groupOptions = (options: Option[]): Map<string, Option[]> => {
  const conflictCheck = new Map();

  const grouped = options.reduce((mapped, option) => {
    const { category } = option;

    if (!mapped.has(category)) {
      mapped.set(category, []);
      conflictCheck.set(category, option.optionType);
    }

    if (conflictCheck.get(category) !== option.optionType) throw Error("Option Type Conflicted");
    mapped.get(category).push(option);
    return mapped;
  }, new Map());

  return grouped;
};

export const getEmptyState = (groupedOptions: Map<string, Option[]>) => {
  const categories = Array.from(groupedOptions.keys());
  return categories.reduce((obj: OptionSelection, category) => {
    const firstOption = (groupedOptions.get(category) as Option[])[0];
    const { id, optionType } = firstOption;
    if (optionType === "radio") obj[category] = id;
    if (optionType === "check") obj[category] = new Set();
    if (optionType === "count") obj[category] = {};
    return obj;
  }, {});
};
