import { useState, useEffect } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import reminderSrvices from "./services/reminder";
function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
  loadReminder();   
  }, [])

  const loadReminder =async () => {
    const reminders = await reminderSrvices.getReminder();
    setReminders(reminders);
  }

  const removeReminder = async (id: number)=> {
    setReminders(reminders.filter(reminder => reminder.id !== id))
    
  }

  return (
    <>
      <ReminderList onRemoveReminder = {removeReminder} items={reminders} />
    </>
  );
}

export default App;
