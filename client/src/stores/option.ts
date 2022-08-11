import Option from "@kiosk/common/types/option";
import { CheckSelection, CountSelection, OptionGroup, OptionSelection } from "@constants/option";
import { getEmptyState, getOptionInfo, groupOptions } from "@utils/optionRefactor";

// State
export type OptionState = {
  count: number;
  optionPrice: number;
  optionContent: string;
  options: Option[];
  optionsMap: OptionGroup;
  picks: OptionSelection;
};

export const initialOptionType = Object.freeze({
  count: 1,
  optionPrice: 0,
  optionContent: "",
  options: [],
  optionsMap: new Map(),
  picks: {},
});

// Types
const OPTION_CLEAR = "OPTION_CLEAR";
const OPTION_PICK_CLEAR = "OPTION_PICK_CLEAR";
const OPTION_INIT = "OPTION_INIT";
const OPTION_SELECT_RADIO = "OPTION_SELECT_RADIO";
const OPTION_SELECT_CHECK = "OPTION_SELECT_CHECK";
const OPTION_SELECT_COUNT = "OPTION_SELECT_COUNT";
const OPTION_CHANGE_COUNT = "OPTION_CHANGE_COUNT";

// Actions
export const optionClear = () => {
  return {
    type: OPTION_CLEAR,
  };
};
export const optionPickClear = () => {
  return {
    type: OPTION_PICK_CLEAR,
  };
};
export const optionInit = (payload: { options: Option[] }) => {
  return {
    type: OPTION_INIT,
    ...payload,
  };
};
export const optionSelectRadio = (payload: { category: string; optionId: number }) => {
  return {
    type: OPTION_SELECT_RADIO,
    ...payload,
  };
};
export const optionSelectCheck = (payload: { category: string; optionId: number }) => {
  return {
    type: OPTION_SELECT_CHECK,
    ...payload,
  };
};
export const optionSelectCount = (payload: { category: string; optionId: number; gap: number }) => {
  return {
    type: OPTION_SELECT_COUNT,
    ...payload,
  };
};
export const optionChangeCount = (payload: { gap: number }) => {
  return {
    type: OPTION_CHANGE_COUNT,
    ...payload,
  };
};

export type OptionAction =
  | ReturnType<typeof optionClear>
  | ReturnType<typeof optionPickClear>
  | ReturnType<typeof optionInit>
  | ReturnType<typeof optionSelectRadio>
  | ReturnType<typeof optionSelectCheck>
  | ReturnType<typeof optionSelectCount>
  | ReturnType<typeof optionChangeCount>;

// Reducer
export default function reducer(state: OptionState, action: OptionAction): OptionState {
  switch (action.type) {
    case OPTION_CLEAR:
      return { ...initialOptionType };
    case OPTION_PICK_CLEAR: {
      const emptyPicks = getEmptyState(state.optionsMap);
      const infos = getOptionInfo({
        optionsMap: state.optionsMap,
        picks: emptyPicks,
      });
      return {
        ...state,
        ...infos,
        count: 1,
        picks: emptyPicks,
      };
    }
    case OPTION_INIT: {
      const { options } = action as ReturnType<typeof optionInit>;
      const optionsMap = groupOptions(options);
      const emptyPicks = getEmptyState(optionsMap);
      const infos = getOptionInfo({
        optionsMap: optionsMap,
        picks: emptyPicks,
      });
      return {
        ...state,
        ...infos,
        options,
        optionsMap,
        picks: emptyPicks,
      };
    }
    case OPTION_SELECT_RADIO: {
      const { category, optionId } = action as ReturnType<typeof optionSelectRadio>;
      const newPicks = { ...state.picks, [category]: optionId };
      const infos = getOptionInfo({
        optionsMap: state.optionsMap,
        picks: newPicks,
      });
      return {
        ...state,
        ...infos,
        picks: newPicks,
      };
    }
    case OPTION_SELECT_CHECK: {
      const { category, optionId } = action as ReturnType<typeof optionSelectCheck>;
      const checkSets = state.picks[category] as CheckSelection;
      const newCheckSets = new Set(checkSets);
      if (newCheckSets.has(optionId)) {
        newCheckSets.delete(optionId);
      } else {
        newCheckSets.add(optionId);
      }
      const newPicks = { ...state.picks, [category]: newCheckSets };
      const infos = getOptionInfo({
        optionsMap: state.optionsMap,
        picks: newPicks,
      });
      return {
        ...state,
        ...infos,
        picks: newPicks,
      };
    }
    case OPTION_SELECT_COUNT: {
      const { category, optionId, gap } = action as ReturnType<typeof optionSelectCount>;
      const counts = state.picks[category] as CountSelection;
      const amount = (counts[optionId] || 0) + gap;
      if (amount < 0) return state;

      const newCounts = { ...counts, [optionId]: amount };
      if (amount <= 0) delete newCounts[optionId];

      const newPicks = { ...state.picks, [category]: newCounts };
      const infos = getOptionInfo({
        optionsMap: state.optionsMap,
        picks: newPicks,
      });
      return {
        ...state,
        ...infos,
        picks: newPicks,
      };
    }
    case OPTION_CHANGE_COUNT: {
      const { gap } = action as ReturnType<typeof optionChangeCount>;
      const amount = (state.count || 0) + gap;
      if (amount <= 0) return state;

      return {
        ...state,
        count: amount,
      };
    }
    default:
      throw new Error("Unhandled PICK Action");
  }
}
