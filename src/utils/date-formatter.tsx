export const format = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const formattedDate = date.toLocaleDateString();
  return formattedDate;
};
