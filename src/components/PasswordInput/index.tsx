import { useRef, useState } from "react";

const PasswordInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isWeakPassword, setWeakPassword] = useState<boolean>(true);

  const emptyHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 5) {
      setWeakPassword(false);
    } else {
      setWeakPassword(true);
    }
  };

  async function copyToClipBoard() {
    if (inputRef.current) {
      const password = inputRef.current?.value;
      await navigator.clipboard.writeText(password);
      alert("Copied to clipboard");
    }
  }
  return (
    <div className="h-20 bg-light-dark border-none text-white px-5 mb-8 flex items-center justify-between">
      <input
        type="text"
        className="bg-light-dark font-bold text-4xl text-white pl-5 placeholder:text-gray inline-block"
        placeholder="P4S$W0rD!"
        ref={inputRef}
        onChange={emptyHandler}
      />
      <button
        className="bg-light-dark text-white px-4 py-2 rounded-md"
        disabled={isWeakPassword}
        onClick={copyToClipBoard}
      >
        Copy to Clipboard
      </button>
    </div>
  );
};

export default PasswordInput;
