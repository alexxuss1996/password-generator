import { PasswordStrength } from "./types";

export function evaluatePasswordStrength(password: string): PasswordStrength {
  const regexWeak = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const regexMedium = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  const regexStrong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~]).{8,}$/;

  if (regexStrong.test(password)) {
    return "strong";
  } else if (regexMedium.test(password)) {
    return "medium";
  } else if (regexWeak.test(password)) {
    return "weak";
  } else {
    return "bad";
  }
}
