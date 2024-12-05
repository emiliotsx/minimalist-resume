import { format } from "@formkit/tempo";

export const formatDates = (startDate, endDate, currentLocale) => {
  const currentText = currentLocale === "es" ? "actualmente" : "currently";
  const startMonth = format(startDate, "MMMM YYYY", currentLocale);
  const endMonth = !!endDate
    ? format(endDate, "MMMM YYYY", currentLocale)
    : currentText;
  return `${startMonth.charAt(0).toUpperCase()}${startMonth.slice(1)} - ${endMonth ? endMonth.charAt(0).toUpperCase() + endMonth.slice(1) : ""}`;
};