const EMAIL_PATTERN =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

export function normalizeEmail(value = "") {
  return value.trim().toLowerCase();
}

export function isValidEmail(value = "") {
  return EMAIL_PATTERN.test(value);
}
