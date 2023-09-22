export const getSticksBackgroundColor = (strength: string, index: number) => {
  if (strength === "bad" && index === 0) {
    return "after:bg-red";
  } else if (strength === "weak" && index < 2) {
    return "after:bg-orange";
  } else if (strength === "medium" && index < 3) {
    return "after:bg-yellow";
  } else if (strength === "strong") {
    return "after:bg-green";
  } else {
    return "after:bg-transparent";
  }
};
