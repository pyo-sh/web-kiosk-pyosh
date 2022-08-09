import { useState } from "react";
import Option from "@kiosk/common/types/option";
import { CheckSelection, CountSelection, OptionSelection } from "@constants/option";

const groupOptions = (options: Option[]): Map<string, Option[]> => {
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

const getEmptyState = (groupedOptions: Map<string, Option[]>) => {
  const categories = Array.from(groupedOptions.keys());
  return categories.reduce((obj: OptionSelection, category) => {
    const firstOption = (groupedOptions.get(category) as Option[])[0];
    const { id, optionType } = firstOption;
    if (optionType === "count") obj[category] = id;
    if (optionType === "check") obj[category] = new Set();
    if (optionType === "radio") obj[category] = {};
    return obj;
  }, {});
};

const useOptionSelect = (options: Option[]) => {
  const groupedOptions = groupOptions(options);
  const [selection, setSelection] = useState<OptionSelection>(getEmptyState(groupedOptions));

  const selectRadio = (category: string, targetId: number) => {
    setSelection((prev) => ({ ...prev, [category]: targetId }));
  };
  const selectCheck = (category: string, targetId: number) => {
    setSelection((prev) => {
      const countSets = prev[category] as CheckSelection;
      const newCountSets = new Set(countSets);
      if (newCountSets.has(targetId)) {
        newCountSets.delete(targetId);
      } else {
        newCountSets.add(targetId);
      }
      return { ...prev, [category]: newCountSets };
    });
  };

  const selectCount = (category: string, targetId: number, count: number) => {
    setSelection((prev) => {
      let newCounts = { ...(prev[category] as CountSelection), [targetId]: count };
      if (count <= 0) delete newCounts[targetId];
      if (count < 0) return prev;
      return { ...prev, [category]: newCounts };
    });
  };
  const clearSelection = () => {
    setSelection(getEmptyState(groupedOptions));
  };

  const setSelections = {
    radio: selectRadio,
    check: selectCheck,
    count: selectCount,
    clear: clearSelection,
  };

  return { groupedOptions, selection, setSelections };
};

export default useOptionSelect;
