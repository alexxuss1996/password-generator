import { useEffect, useRef } from "react";
import { FaCopy } from "react-icons/fa";
import { PasswordStrength } from "../../types";
import { evaluatePasswordStrength } from "../../evaluatePasswordStrength";
type PasswordInputProps = {
  passwordData?: string;
  setPasswordStrength: React.Dispatch<React.SetStateAction<PasswordStrength>>;
};

const PasswordInput = ({ setPasswordStrength, passwordData }: PasswordInputProps) => {
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
      alert("Copied to clipboard");
    }
  };
  return (
    <div className="h-20 bg-light-dark border-none text-white px-5 mb-8 flex items-center justify-between">
      <input
        type="text"
        className="bg-light-dark font-bold text-4xl text-white pl-5 placeholder:text-gray md:w-2/3 block"
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
        className="bg-light-dark text-white px-4 py-2 rounded-md"
        onClick={copyToClipBoard}
      >
        <FaCopy color={!passwordData || passwordData.length === 0 ? "#807D90" : "#A4FFAF"} size={36} />
      </button>
    </div>
  );
};

export default PasswordInput;
