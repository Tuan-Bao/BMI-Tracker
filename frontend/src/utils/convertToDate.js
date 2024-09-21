const convertToDate = (dayString) => {
  const [day, month, year] = dayString.split("/");
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.toISOString().split("T")[0];
};

export default convertToDate;
