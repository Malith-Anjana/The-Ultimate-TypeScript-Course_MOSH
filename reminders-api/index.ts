import express from "express";
import reminderRouter from "./routers/reminder";

const app = express();
app.use(express.json());
app.use("/reminders", reminderRouter);
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(8000, () => console.log("Server started"));
