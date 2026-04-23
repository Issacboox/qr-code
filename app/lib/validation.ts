export const  isValidCode = (code: string) => {
  const regex = /^[A-Z0-9]{4}(-[A-Z0-9]{4}){5}$/;
  return regex.test(code);
};