export const generateRandomNumberInGivenRange = (a: number, b: number) => {
  return Math.ceil(Math.random() * b) + a;
};
