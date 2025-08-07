import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import { DailyEntity } from "./entities/daily.entity";
import { data } from "./data";
import { company } from "./company";

const app = express();
const port = 3333;

app.use(cors());
app.use(morgan("short"));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/dailies", (_, res) => {
  const workDailies = company.workingDays.map((day) => ({
    id: day.id,
    day: day.day,
  }));

  res.json(workDailies);
});

app.post("/dailies", (req, res) => {
  //const daily = new DailyEntity({})
});

app.get("/dailies/:id", (req, res) => {
  //
});

app.patch("/dailies/:id", (req, res) => {
  //
});

app.delete("/dailies/:id", (req, res) => {
  //
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
