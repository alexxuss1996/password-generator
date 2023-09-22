import { useEffect, useRef } from "react";
import { FaCopy } from "react-icons/fa";
import { PasswordStrength } from "../../types";
import { evaluatePasswordStrength } from "../../utils/evaluatePasswordStrength";
type PasswordInputProps = {
  passwordData?: string;
  setPasswordStrength: React.Dispatch<React.SetStateAction<PasswordStrength>>;
  openToast: () => void;
};

const PasswordInput = ({ setPasswordStrength, passwordData, openToast }: PasswordInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (passwordData) {
      const inputPasswordStrength = evaluatePasswordStrength(passwordData);
      setPasswordStrength(inputPasswordStrength);
    }
  }, [passwordData]);

  const copyToClipBoard = () => {
    if (inputRef.current) {
      const password = inputRef.current?.value;
      navigator.clipboard.writeText(password);
      openToast();
    }
  };
  return (
    <div className="h-20 overflow-hidden bg-light-dark border-none text-white px-1 md:px-5 mb-8 flex items-center justify-between">
      <input
        type="text"
        className="bg-light-dark justify-start font-bold md:text-4xl text-white placeholder:text-gray md:pl-0 px-4 text-xl md:max-w-md max-w-xs block"
        placeholder="P4S$W0rD!"
        ref={inputRef}
        value={passwordData || ""}
        disabled
        aria-label="Password"
      />
      <button
        disabled={!passwordData || passwordData.length === 0}
        type="button"
        aria-label="Copy to clipboard"
        title="Copy to clipboard"
        className="bg-light-dark disabled:text-gray hover:text-white text-accent p-2 md:pl-4"
        onClick={copyToClipBoard}
      >
        <FaCopy className="text-xl md:text-3xl" />
      </button>
    </div>
  );
};

export default PasswordInput;
