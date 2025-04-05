const emailRegex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$";

export const uniqueInputId = (label) => {
  return `input-${label?.replace(/\s+/g, "-").toLowerCase()}`;
};

export const emailValidation = (email) => {
  return emailRegex?.test(email);
};
