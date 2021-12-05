import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export const minimizeText = (text: string): string => {
  return `${text.split(",")[0]}...`;
};

export const converDate = (date: string): string =>
  dayjs(date, "YYYY-MM-DD").format("DD.MM.YYYY");
