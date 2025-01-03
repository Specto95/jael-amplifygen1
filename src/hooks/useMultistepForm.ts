import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goTo(index: number) {
    if (index < 0 || index >= steps.length) {
      throw new Error(`Invalid step index: ${index}`);
    }
    setCurrentStepIndex(index);
  }

  const handleNextStep = () => {
    if (currentStepIndex !== steps.length - 1) return next();
  };

  const handleBackStep = () => {
    if (currentStepIndex !== 0) return back();
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
    handleNextStep,
    handleBackStep,
  };
}
