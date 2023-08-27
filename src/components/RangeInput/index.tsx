import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface RangeInputProps extends Partial<React.InputHTMLAttributes<HTMLInputElement>> {
  min: number;
  max: number;
  value: number;
  step: number;
  defaultValue?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RangeInput = ({ min, max, step, value, onChange: onChange }: RangeInputProps) => {
  const rangeInputRef = useRef<HTMLInputElement | null>(null);
  const [isChanging, setIsChanging] = useState(false);

  const getPercent = useMemo(() => (value: number) => ((value - min) / (max - min)) * 100, [max, min]);

  const changeInputProgressPercentStyle = useCallback(() => {
    rangeInputRef.current?.style.setProperty(
      "--webkitProgressPercent",
      `${getPercent(parseFloat(rangeInputRef.current?.value))}%`
    );
  }, [getPercent]);

  useEffect(() => {
    changeInputProgressPercentStyle();
    const inputElement = rangeInputRef.current;

    const handleUpAndLeave = () => setIsChanging(false);
    const handleDown = () => setIsChanging(true);

    if (inputElement) {
      inputElement.addEventListener("mousemove", changeInputProgressPercentStyle);
      inputElement.addEventListener("mousedown", handleDown);
      inputElement.addEventListener("mouseup", handleUpAndLeave);
      inputElement.addEventListener("mouseleave", handleUpAndLeave);
    }
    return () => {
      if (inputElement) {
        inputElement.removeEventListener("mousemove", changeInputProgressPercentStyle);
        inputElement.removeEventListener("mousedown", handleDown);
        inputElement.removeEventListener("mouseup", handleUpAndLeave);
        inputElement.removeEventListener("mouseleave", handleUpAndLeave);
      }
    };
  }, [isChanging, changeInputProgressPercentStyle]);

  useEffect(() => {
    if (!rangeInputRef?.current) return;
    changeInputProgressPercentStyle();
  }, [rangeInputRef, changeInputProgressPercentStyle]);

  return (
    <div className="relative mt-5">
      <input
        type="range"
        ref={rangeInputRef}
        min={min}
        max={max}
        step={step}
        value={value}
        className="w-full h-2.5 appearance-none bg-transparent rounded-none cursor-pointer focus:outline-none"
        aria-label="Password Length Range"
        role="slider"
        tabIndex={0}
        onChange={onChange}
      />
    </div>
  );
};

export default RangeInput;
