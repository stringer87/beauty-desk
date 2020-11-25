export function Password(password) {
  const reg = /^[a-zA-Z0-9!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~]{8,16}$/;
  return reg.test(password);
}

export function Name(name) {
  const reg = /^[a-zA-Z]*$/;
  return reg.test(name)
}

export function Email(email) {
  const reg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return reg.test(email);
}
