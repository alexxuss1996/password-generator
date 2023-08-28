import PasswordLengthRange from "../PasswordLengthRange";
import PasswordSettings from "../PasswordSettings";

const PasswordActions = () => {
  return (
    <div className="px-8 py-6 bg-light-dark">
      <PasswordLengthRange />
      <PasswordSettings />
    </div>
  );
};

export default PasswordActions;
