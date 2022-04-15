export type Schedule = {
  arrivalDate: string;
  start: string;
  end: string;
};

export enum ScheduleStrategy {
  Fixed = 'fixed',
  Flexible = 'flexible',
  SemiFlexible = 'semiFlexible',
}
