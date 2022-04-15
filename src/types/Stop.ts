export type Stop = {
  address: string;
  company: string;
  openingHours: {
    from: number;
    to: number;
  };
  schedule: {
    start: string;
    end: string;
  };
};
