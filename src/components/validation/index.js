export function Password(password) {
  const reg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20}/;
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
