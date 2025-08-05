import { randomUUID } from "node:crypto";

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
}

export interface CompanyProps {
  id: string;
  workingDays: WorkingDaysProps[];
}

export const company: CompanyProps = {
  id: randomUUID(),
  workingDays: [
    {
      id: randomUUID(),
      day: "Monday",
      morningEntrance: new Date("2025-07-31T08:00:00"),
      afternoonExit: new Date("2025-07-31T17:00:00"),
    },
    {
      id: randomUUID(),
      day: "Tuesday",
      morningEntrance: new Date("2025-08-01T08:00:00"),
      afternoonExit: new Date("2025-08-01T17:00:00"),
    },
    {
      id: randomUUID(),
      day: "Wednesday",
      morningEntrance: new Date("2025-08-02T08:00:00"),
      afternoonExit: new Date("2025-08-02T17:00:00"),
    },
    {
      id: randomUUID(),
      day: "Thursday",
      morningEntrance: new Date("2025-08-03T08:00:00"),
      afternoonExit: new Date("2025-08-03T17:00:00"),
    },
    {
      id: randomUUID(),
      day: "Friday",
      morningEntrance: new Date("2025-08-04T08:00:00"),
      afternoonExit: new Date("2025-08-04T17:00:00"),
    },
  ],
};
