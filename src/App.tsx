import { useState } from "react";
import PasswordHeading from "./components/PasswordHeading";
import PasswordInput from "./components/PasswordInput";
import { PasswordSettingsType, PasswordStrength } from "./types";
import { FaArrowRight } from "react-icons/fa";
import PasswordLengthRange from "./components/PasswordLengthRange";
import PasswordSettings from "./components/PasswordSettings";
import PasswordStrengthPanel from "./components/PasswordStrengthPanel";
import { useQuery } from "@tanstack/react-query";
import Toast from "./components/Toast";

function App() {
  const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>("bad");
  const [passwordLength, setPasswordLength] = useState<number>(8);
  const [passwordSettings, setPasswordSettings] = useState<PasswordSettingsType>({
    includeLowercase: true,
    includeUppercase: false,
    includeNumbers: false,
    includeSpecialCharacters: false,
  });
  const [openToast, setOpenToast] = useState<boolean>(false);

  const handleCloseToast = () => {
    setOpenToast(false);
  };

  const handleOpenToast = () => {
    setOpenToast(true);
  };

  const booleanToBinary = (bool: boolean) => (bool ? 1 : 0);
  const [lowerCase, upperCase, numbers, specialChars] = Object.values(passwordSettings).map((value) =>
    booleanToBinary(value)
  );
  const { data, refetch } = useQuery({
    queryKey: ["password"],
    queryFn: async () => {
      return await fetch(
        `https://www.psswrd.net/api/v1/password/?length=${passwordLength}&lower=${lowerCase}&upper=${upperCase}&int=${numbers}&special=${specialChars}`
      ).then((res) => res.json());
    },
    enabled: false,
  });
  return (
    <div className="container max-w-3xl relative">
      {openToast && <Toast message="Copied to clipboard!" onClose={handleCloseToast} />}
      <PasswordHeading title="Password Generator" />
      <PasswordInput
        setPasswordStrength={setPasswordStrength}
        passwordData={data?.password}
        openToast={handleOpenToast}
      />
      <div className="md:px-8 px-4 py-6 bg-light-dark">
        <PasswordLengthRange passwordLength={passwordLength} setPasswordLength={setPasswordLength} />
        <PasswordSettings passwordSettings={passwordSettings} setPasswordSettings={setPasswordSettings} />
        <PasswordStrengthPanel passwordStrength={passwordStrength} />
        <button
          className="bg-accent flex text-dark text-center items-center justify-center gap-3 font-semibold py-5 px-8 hover:bg-transparent border-transparent border-2 hover:border-accent transition-colors duration-300 ease-in-out w-full hover:text-accent text-xl disabled:bg-gray disabled:hover:text-dark disabled:border-transparent"
          onClick={() => {
            refetch();
          }}
          disabled={passwordLength < 6}
        >
          Generate Password <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default App;
