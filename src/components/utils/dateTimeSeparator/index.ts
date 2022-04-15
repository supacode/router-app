export const dateTimeSeparator = (dateTime: string) => {
  const [date, time] = dateTime.split(' ');

  return {
    date,
    time: time?.slice(0, -3), // 10:00:00 => 10:00
  };
};
