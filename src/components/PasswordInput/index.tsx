import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";

const PasswordInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const copyButtonRef = useRef<HTMLButtonElement | null>(null);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);

  const PasswordInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 5) {
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
    }
  };

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
        className="bg-light-dark font-bold text-4xl text-white pl-5 placeholder:text-gray inline-block"
        placeholder="P4S$W0rD!"
        ref={inputRef}
        onChange={PasswordInputHandler}
      />
      <button
        className="bg-light-dark text-white px-4 py-2 rounded-md"
        disabled={!isValidPassword}
        ref={copyButtonRef}
        onClick={copyToClipBoard}
      >
        <FaCopy color={copyButtonRef.current?.disabled ? "#A4FFAF" : "#807D90"} size={36} />
      </button>
    </div>
  );
};

export default PasswordInput;
