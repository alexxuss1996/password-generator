import { PasswordSettingsType } from "../../types";

type PasswordSettingsProps = {
  passwordSettings: PasswordSettingsType;
  setPasswordSettings: React.Dispatch<React.SetStateAction<PasswordSettingsType>>;
};
const PasswordSettings = ({ passwordSettings, setPasswordSettings }: PasswordSettingsProps) => {
  return (
    <ul className="mb-8 font-bold text-xl flex flex-col text-white items-start gap-y-4">
      <li className="flex items-center">
        <input
          type="checkbox"
          name="lower-case"
          id="lower-case"
          defaultChecked={passwordSettings?.includeLowercase}
          onChange={() =>
            setPasswordSettings({ ...passwordSettings, includeLowercase: !passwordSettings.includeLowercase })
          }
          className="relative mr-4 transition-all ease-in-out duration-300 cursor-pointer peer appearance-none w-5 h-5 border-white border-2 bg-trasparent checked:bg-accent checked:border-accent rounded-sm after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-no-repeat after:bg-center after:bg-[length:14px] checked:after:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxOSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuNDUzMjQgMTQuMzA2TDAuMjc4MjM3IDguMTMxMDFDLTAuMDkyNzQ1NiA3Ljc2MDAzIC0wLjA5Mjc0NTYgNy4xNTg1MiAwLjI3ODIzNyA2Ljc4NzVMMS42MjE3MSA1LjQ0Mzk5QzEuOTkyNjkgNS4wNzI5NyAyLjU5NDIzIDUuMDcyOTcgMi45NjUyMSA1LjQ0Mzk5TDcuMTI0OTkgOS42MDM3M0wxNi4wMzQ4IDAuNjkzOTkzQzE2LjQwNTcgMC4zMjMwMTEgMTcuMDA3MyAwLjMyMzAxMSAxNy4zNzgzIDAuNjkzOTkzTDE4LjcyMTcgMi4wMzc1QzE5LjA5MjcgMi40MDg0OCAxOS4wOTI3IDMuMDA5OTkgMTguNzIxNyAzLjM4MTAxTDcuNzk2NzQgMTQuMzA2QzcuNDI1NzIgMTQuNjc3IDYuODI0MjIgMTQuNjc3IDYuNDUzMjQgMTQuMzA2WiIgZmlsbD0iIzE4MTcxRiIvPgo8L3N2Zz4K')]"
        />
        <label
          htmlFor="lower-case"
          className="text-light-gray transition-all ease-in-out duration-300 hover:text-white/90 relative top-0.5 peer-checked:text-white cursor-pointer"
        >
          Include LowerCase
        </label>
      </li>
      <li className="flex items-center">
        <input
          type="checkbox"
          name="upper-case"
          id="upper-case"
          onChange={() =>
            setPasswordSettings({ ...passwordSettings, includeUppercase: !passwordSettings.includeUppercase })
          }
          defaultChecked={passwordSettings?.includeUppercase}
          className="relative mr-4 transition-all ease-in-out duration-300 cursor-pointer peer appearance-none w-5 h-5 border-white border-2 bg-trasparent checked:bg-accent checked:border-accent rounded-sm after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-no-repeat after:bg-center after:bg-[length:14px] checked:after:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxOSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuNDUzMjQgMTQuMzA2TDAuMjc4MjM3IDguMTMxMDFDLTAuMDkyNzQ1NiA3Ljc2MDAzIC0wLjA5Mjc0NTYgNy4xNTg1MiAwLjI3ODIzNyA2Ljc4NzVMMS42MjE3MSA1LjQ0Mzk5QzEuOTkyNjkgNS4wNzI5NyAyLjU5NDIzIDUuMDcyOTcgMi45NjUyMSA1LjQ0Mzk5TDcuMTI0OTkgOS42MDM3M0wxNi4wMzQ4IDAuNjkzOTkzQzE2LjQwNTcgMC4zMjMwMTEgMTcuMDA3MyAwLjMyMzAxMSAxNy4zNzgzIDAuNjkzOTkzTDE4LjcyMTcgMi4wMzc1QzE5LjA5MjcgMi40MDg0OCAxOS4wOTI3IDMuMDA5OTkgMTguNzIxNyAzLjM4MTAxTDcuNzk2NzQgMTQuMzA2QzcuNDI1NzIgMTQuNjc3IDYuODI0MjIgMTQuNjc3IDYuNDUzMjQgMTQuMzA2WiIgZmlsbD0iIzE4MTcxRiIvPgo8L3N2Zz4K')]"
        />
        <label
          htmlFor="upper-case"
          className="text-light-gray transition-all ease-in-out duration-300 hover:text-white/90 relative top-0.5 peer-checked:text-white cursor-pointer"
        >
          Include UpperCase
        </label>
      </li>
      <li className="flex items-center">
        <input
          type="checkbox"
          name="numbers"
          id="numbers"
          defaultChecked={passwordSettings?.includeNumbers}
          onChange={() =>
            setPasswordSettings({ ...passwordSettings, includeNumbers: !passwordSettings.includeNumbers })
          }
          className="relative mr-4 transition-all ease-in-out duration-300 cursor-pointer peer appearance-none w-5 h-5 border-white border-2 bg-trasparent checked:bg-accent checked:border-accent rounded-sm after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-no-repeat after:bg-center after:bg-[length:14px] checked:after:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxOSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuNDUzMjQgMTQuMzA2TDAuMjc4MjM3IDguMTMxMDFDLTAuMDkyNzQ1NiA3Ljc2MDAzIC0wLjA5Mjc0NTYgNy4xNTg1MiAwLjI3ODIzNyA2Ljc4NzVMMS42MjE3MSA1LjQ0Mzk5QzEuOTkyNjkgNS4wNzI5NyAyLjU5NDIzIDUuMDcyOTcgMi45NjUyMSA1LjQ0Mzk5TDcuMTI0OTkgOS42MDM3M0wxNi4wMzQ4IDAuNjkzOTkzQzE2LjQwNTcgMC4zMjMwMTEgMTcuMDA3MyAwLjMyMzAxMSAxNy4zNzgzIDAuNjkzOTkzTDE4LjcyMTcgMi4wMzc1QzE5LjA5MjcgMi40MDg0OCAxOS4wOTI3IDMuMDA5OTkgMTguNzIxNyAzLjM4MTAxTDcuNzk2NzQgMTQuMzA2QzcuNDI1NzIgMTQuNjc3IDYuODI0MjIgMTQuNjc3IDYuNDUzMjQgMTQuMzA2WiIgZmlsbD0iIzE4MTcxRiIvPgo8L3N2Zz4K')]"
        />
        <label
          htmlFor="numbers"
          className="text-light-gray transition-all ease-in-out duration-300 hover:text-white/90 relative top-0.5 peer-checked:text-white cursor-pointer"
        >
          Include Numbers
        </label>
      </li>
      <li className="flex items-center">
        <input
          type="checkbox"
          name="special-chars"
          id="special-chars"
          defaultChecked={passwordSettings?.includeSpecialCharacters}
          onChange={() =>
            setPasswordSettings({
              ...passwordSettings,
              includeSpecialCharacters: !passwordSettings.includeSpecialCharacters,
            })
          }
          className="relative mr-4 transition-all ease-in-out duration-300 cursor-pointer peer appearance-none w-5 h-5 after:z-10 border-white border-2 bg-trasparent checked:bg-accent checked:border-accent rounded-sm after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-no-repeat after:bg-center after:bg-[length:14px] checked:after:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxOSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuNDUzMjQgMTQuMzA2TDAuMjc4MjM3IDguMTMxMDFDLTAuMDkyNzQ1NiA3Ljc2MDAzIC0wLjA5Mjc0NTYgNy4xNTg1MiAwLjI3ODIzNyA2Ljc4NzVMMS42MjE3MSA1LjQ0Mzk5QzEuOTkyNjkgNS4wNzI5NyAyLjU5NDIzIDUuMDcyOTcgMi45NjUyMSA1LjQ0Mzk5TDcuMTI0OTkgOS42MDM3M0wxNi4wMzQ4IDAuNjkzOTkzQzE2LjQwNTcgMC4zMjMwMTEgMTcuMDA3MyAwLjMyMzAxMSAxNy4zNzgzIDAuNjkzOTkzTDE4LjcyMTcgMi4wMzc1QzE5LjA5MjcgMi40MDg0OCAxOS4wOTI3IDMuMDA5OTkgMTguNzIxNyAzLjM4MTAxTDcuNzk2NzQgMTQuMzA2QzcuNDI1NzIgMTQuNjc3IDYuODI0MjIgMTQuNjc3IDYuNDUzMjQgMTQuMzA2WiIgZmlsbD0iIzE4MTcxRiIvPgo8L3N2Zz4K')]"
        />
        <label
          htmlFor="special-chars"
          className="text-light-gray transition-all ease-in-out duration-300 hover:text-white/90 relative top-0.5 peer-checked:text-white cursor-pointer"
        >
          Include Special Characters
        </label>
      </li>
    </ul>
  );
};

export default PasswordSettings;
