import { useState } from "react";

type PageStepType = {
  step: string;
  goPrevStep: () => void;
  goNextStep: () => void;
};

const usePageStep = (stepList: string[]): PageStepType => {
  const [stepId, setStepId] = useState<number>(0);
  const step = stepList[stepId];

  const goPrevStep = () => {
    setStepId((prevState) => {
      if (prevState <= 0) return 0;
      return prevState - 1;
    });
  };

  const goNextStep = () => {
    setStepId((prevState) => (prevState + 1) % stepList.length);
  };

  return { step, goPrevStep, goNextStep };
};

export default usePageStep;
