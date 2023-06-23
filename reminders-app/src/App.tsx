import { useState } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";

function App() {
  const [reminder, setReminder] = useState<Reminder[]>([
    { id: 1, title: "Reminder1" },
    { id: 2, title: "Reminder2" },
  ]);
  
  return (
    <>
      <ReminderList items={reminder} />
    </>
  );
}

export default App;
