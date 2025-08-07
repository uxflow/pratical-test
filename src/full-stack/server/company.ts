interface EmployeeDailyEntityProps {
  id: string;
  morningEntrance: Date;
  afternoonExit: Date;
  createdAt: Date;
}

export type DayType =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export interface WorkingDaysProps {
  id: string;
  day: DayType;
  morningEntrance: Date;
  afternoonExit: Date;
  employeeDaily: EmployeeDailyEntity;
}

export interface CompanyProps {
  id: string;
  workingDays: WorkingDaysProps[];
}

export class EmployeeDailyEntity implements EmployeeDailyEntityProps {
  id: string;
  morningEntrance: Date;
  afternoonExit: Date;
  createdAt: Date;

  constructor({
    id,
    morningEntrance,
    afternoonExit,
    createdAt,
  }: EmployeeDailyEntityProps) {
    this.id = id;
    this.morningEntrance = morningEntrance;
    this.afternoonExit = afternoonExit;
    this.createdAt = createdAt;
  }
}

export const company: CompanyProps = {
  id: "0",
  workingDays: [
    {
      id: "1",
      day: "Monday",
      morningEntrance: new Date("2025-07-31T08:00:00"),
      afternoonExit: new Date("2025-07-31T17:00:00"),
      employeeDaily: {} as EmployeeDailyEntity,
    },
    {
      id: "2",
      day: "Tuesday",
      morningEntrance: new Date("2025-08-01T08:00:00"),
      afternoonExit: new Date("2025-08-01T17:00:00"),
      employeeDaily: {} as EmployeeDailyEntity,
    },
    {
      id: "3",
      day: "Wednesday",
      morningEntrance: new Date("2025-08-02T08:00:00"),
      afternoonExit: new Date("2025-08-02T17:00:00"),
      employeeDaily: {} as EmployeeDailyEntity,
    },
    {
      id: "4",
      day: "Thursday",
      morningEntrance: new Date("2025-08-03T08:00:00"),
      afternoonExit: new Date("2025-08-03T17:00:00"),
      employeeDaily: {} as EmployeeDailyEntity,
    },
    {
      id: "5",
      day: "Friday",
      morningEntrance: new Date("2025-08-04T08:00:00"),
      afternoonExit: new Date("2025-08-04T17:00:00"),
      employeeDaily: {} as EmployeeDailyEntity,
    },
  ],
};
