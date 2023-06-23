import { useState, useEffect } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import reminderSrvices from "./services/reminder";
function App() {
  const [reminder, setReminder] = useState<Reminder[]>([]);

  useEffect(() => {
  loadReminder();   
  }, [])

  const loadReminder =async () => {
    const reminders = await reminderSrvices.getReminder();
    setReminder(reminders);
  }
  return (
    <>
      <ReminderList items={reminder} />
    </>
  );
}

export default App;
