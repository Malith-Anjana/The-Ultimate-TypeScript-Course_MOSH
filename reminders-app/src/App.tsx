import { useState, useEffect } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import reminderServices from "./services/reminder";
import NewReminder from "./components/NewReminder";
function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminder();
  }, []);

  const loadReminder = async () => {
    const reminders = await reminderServices.getReminder();
    setReminders(reminders);
  };

  const removeReminder = async (id: number) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const addReminder = async (title: string) => {
    const response = await reminderServices.addReminder(title);
    setReminders([response, ...reminders])
  };
  return (
    <>
      <NewReminder addReminder= {addReminder} />
      <ReminderList onRemoveReminder={removeReminder} items={reminders} />
    </>
  );
}

export default App;
