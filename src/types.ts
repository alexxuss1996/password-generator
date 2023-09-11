export type PasswordStrength = "bad" | "weak" | "medium" | "strong";
export type PasswordSettingsType = {
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSpecialCharacters: boolean;
  includeUppercase: boolean;
};

export type APIResponseType = {
  password: string;
}