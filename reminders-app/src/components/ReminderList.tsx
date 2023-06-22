import Reminder from "../models/reminder";

interface ReminderProps {
    items: Reminder[];
}

function ReminderList({items} : ReminderProps){
  return <ul>
    {items.map(item => <li key={item.id}>{item.title}</li>)}
  </ul>;
};

export default ReminderList;
