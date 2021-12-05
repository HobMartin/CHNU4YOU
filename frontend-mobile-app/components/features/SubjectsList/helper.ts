import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);

export const colorSubjectBlock = (time: string) => {
  const timeDiff = dayjs(time, "HH:mm").diff(dayjs(), "m");
  if (timeDiff >= 30 && timeDiff <= 60) return "#55efc4";
  if (timeDiff <= 30 && timeDiff >= 15) return "#ffeaa7";
  if (timeDiff <= 15 && timeDiff >= 0) return "#ff7675";
  return "#ffff";
};

export const parseLinkUrl = (url: string): string => {
  if (url.includes("meet.google")) return "Google Meet";
  return "Zoom";
};

export const capitalizeFirstLetter = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);
