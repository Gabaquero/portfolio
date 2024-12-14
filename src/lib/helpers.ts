export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}

export function getCurrentTimeInHouston(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  // Convert the UTC time to Houston's time (Central Standard Time)
  const offsetHouston = -6; // Houston is in CST (UTC-6) without DST adjustment
  now.setHours(now.getUTCHours() + offsetHouston);

  return now;
}

export function formatTimeForHouston(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // This will format the time in 12-hour format with AM/PM
    timeZone: "America/Chicago", // Houston falls under the "America/Chicago" timezone
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);

  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}