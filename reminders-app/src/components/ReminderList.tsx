import Reminder from "../models/reminder";

interface ReminderProps {
    items: Reminder[];
}

function ReminderList({items} : ReminderProps){
  return <ul className="list-group">
    {items.map(item => <li className='list-group-item' key={item.id}>{item.title}</li>)}
  </ul>;
};

export default ReminderList;
