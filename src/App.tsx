import PasswordActions from "./components/PasswordActions";
import PasswordHeading from "./components/PasswordHeading";
import PasswordInput from "./components/PasswordInput";

function App() {
  return (
    <div className="container max-w-3xl">
      <PasswordHeading title="Password Generator" />
      <PasswordInput />
      <PasswordActions />
    </div>
  );
}

export default App;
