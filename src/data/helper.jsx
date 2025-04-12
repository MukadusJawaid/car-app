const emailRegex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$";

export const uniqueInputId = (label) => {
  return `input-${label?.replace(/\s+/g, "-").toLowerCase()}`;
};

export const emailValidation = (email) => {
  return emailRegex?.test(email);
};
export const generateSlug = (title = "") => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace spaces and special chars with dashes
    .replace(/^-+|-+$/g, ""); // Trim starting/ending dashes
};
