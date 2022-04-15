// https://stackoverflow.com/questions/28876076/insert-colon-separator-into-timings-i-e-convert-1230a-to-1230a-and-1430-to-14

const trailingZero = (hourMinute: string) => ('0' + hourMinute).slice(-2);

export const dateTransformer = (time: string | number) => {
  const origin = `${time}`.replace(/\b(\d{1,2})(\d{2})/g, '$1:$2'); // 0901 => 09:01, 1010 => 10:10

  const [hours, minutes] = origin.split(':');

  return `${trailingZero(hours)}:${trailingZero(minutes)}`;
};
