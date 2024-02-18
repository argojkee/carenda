export const mileageFormating = (num) => {
  if (num != null) {
    if (typeof num === "string") {
      num = parseFloat(num);
    }
    if (!isNaN(num)) {
      return new Intl.NumberFormat("en-US", {
        useGrouping: true,
        maximumSignificantDigits: num >= 100000 ? 7 : 6,
      }).format(num);
    }
  }
  return "";
};

export const backToNumber = (str) => {
  return parseInt(str.replace(/,/g, ""));
};
