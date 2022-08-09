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
