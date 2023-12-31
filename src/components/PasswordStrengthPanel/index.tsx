import { PasswordStrength } from "../../types";
import { getSticksBackgroundColor } from "../../utils/getSticksBackgroundColor";

type PasswordStrengthPanelProps = {
  passwordStrength: PasswordStrength;
};
const PasswordStrengthPanel = ({ passwordStrength }: PasswordStrengthPanelProps) => {
  return (
    <div className="flex items-center justify-between mb-8 text-white bg-dark px-3 py-5 md:p-6">
      <span className="font-bold uppercase text-xl text-gray">Strength</span>
      <div className="flex flex-row">
        <p className="mr-4 font-semibold uppercase text-xl md:text-2xl">{passwordStrength}</p>
        <ul className="flex flex-row items-center gap-x-2.5">
          {[1, 2, 3, 4].map((index) => (
            <li className="relative" key={index}>
              <span
                className={`appearance-none invisible block relative w-3 h-6 ${getSticksBackgroundColor(
                  passwordStrength,
                  index - 1
                )} after:visible after:block after:-translate-y-full after:absolute after:z-20 after:content-[''] after:w-full after:h-full after:border after:transition-colors after:duration-300 after:ease-in after:border-white`}
              >
                {index}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PasswordStrengthPanel;
