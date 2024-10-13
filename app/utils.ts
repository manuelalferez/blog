import { formatDistanceToNow } from "date-fns";

export function getRelativeTime(date: Date | string): string {
  const timeDifference: string = formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });

  const [number, unit] = timeDifference.split(" ") as [string, string];

  const num = parseInt(number, 10);

  if (unit.startsWith("second")) {
    return "just now";
  } else if (unit.startsWith("minute")) {
    return `${num} minute${num > 1 ? "s" : ""} ago`;
  } else if (unit.startsWith("hour")) {
    return `${num} hour${num > 1 ? "s" : ""} ago`;
  } else if (unit.startsWith("day")) {
    return `${num} day${num > 1 ? "s" : ""} ago`;
  } else if (unit.startsWith("month")) {
    return `${num} month${num > 1 ? "s" : ""} ago`;
  } else if (unit.startsWith("year")) {
    return `${num} year${num > 1 ? "s" : ""} ago`;
  }

  return timeDifference;
}
