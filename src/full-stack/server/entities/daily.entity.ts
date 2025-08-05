interface DailyEntityProps {
  id: string;
  morningEntrance: Date;
  afternoonExit: Date;
  createdAt: Date;
}

export class DailyEntity implements DailyEntityProps {
  id: string;
  morningEntrance: Date;
  afternoonExit: Date;
  createdAt: Date;

  constructor({
    id,
    morningEntrance,
    afternoonExit,
    createdAt,
  }: DailyEntityProps) {
    this.id = id;
    this.morningEntrance = morningEntrance;
    this.afternoonExit = afternoonExit;
    this.createdAt = createdAt;
  }
}
