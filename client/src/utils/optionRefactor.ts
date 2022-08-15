import {
  CheckSelection,
  CountSelection,
  OptionGroup,
  OptionSelection,
  OPTION_TYPE,
} from "@constants/option";
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
    if (optionType === OPTION_TYPE.RADIO) obj[category] = id;
    if (optionType === OPTION_TYPE.CHECK) obj[category] = new Set();
    if (optionType === OPTION_TYPE.COUNT) obj[category] = {};
    return obj;
  }, {});
};

export const getOptionInfo = ({
  optionsMap,
  picks,
}: {
  optionsMap: OptionGroup;
  picks: OptionSelection;
}) => {
  const categories = Object.keys(picks);

  const { totalPrice, optionContents } = categories.reduce(
    (
      { totalPrice, optionContents }: { totalPrice: number; optionContents: string[] },
      category,
    ) => {
      if (!optionsMap.has(category)) return { totalPrice, optionContents };

      const options = optionsMap.get(category) as Option[];
      const { optionType } = options[0];
      let optionPrice = 0;
      let optionContent: string[] = [];

      if (optionType === OPTION_TYPE.RADIO) {
        const targetId = picks[category] as number;
        const target = options.find(({ id }) => id === targetId);
        const { name, price } = target as Option;

        optionPrice = price;
        optionContent = [...optionContents, name];
      }

      if (optionType === OPTION_TYPE.CHECK) {
        const checkSets = picks[category] as CheckSelection;
        const targets = options.filter(({ id }) => checkSets.has(id));

        optionPrice = targets.reduce((acc, { price }) => acc + price, 0);
        optionContent = [...optionContents, ...targets.map(({ name }) => name)];
      }

      if (optionType === OPTION_TYPE.COUNT) {
        const countObj = picks[category] as CountSelection;

        const thisContents = options
          .map(({ id, name, price }) => {
            if (!countObj.hasOwnProperty(id)) return "";

            const count = countObj[id];
            optionPrice += price * count;

            const countString = count ? `(${count})` : "";
            return `${name}${countString}`;
          })
          .filter((s) => s);

        optionContent = [...optionContents, ...thisContents];
      }

      return {
        totalPrice: totalPrice + optionPrice,
        optionContents: optionContent,
      };
    },
    { totalPrice: 0, optionContents: [] },
  );

  return { optionPrice: totalPrice, optionContents };
};
