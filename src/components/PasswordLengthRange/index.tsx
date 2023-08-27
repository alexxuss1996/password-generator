import { useState } from "react";
import RangeInput from "../RangeInput";

const PasswordLengthRange = () => {
  const onChangeRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el = e.target;
    setPasswordLength(el.valueAsNumber);
  };
  const [passwordLength, setPasswordLength] = useState(0);
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl">Character Length</h2>
        <span className="font-bold text-4xl text-accent">{passwordLength}</span>
      </div>
      <RangeInput onChange={onChangeRange} value={passwordLength} defaultValue={0} min={0} max={24} step={1} />
    </div>
  );
};

export default PasswordLengthRange;
