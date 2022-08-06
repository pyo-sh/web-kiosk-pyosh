export const getYesterdayEnd = () => {
  const returnDate = new Date(Date.now());
  returnDate.setHours(0);
  returnDate.setMinutes(0);
  returnDate.setSeconds(0);
  returnDate.setMilliseconds(-1);
  return returnDate;
};
