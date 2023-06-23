import { Router } from "express";
import { CreateReminderDto } from "./dtos/create-reminder";
import Reminder from "../models/reminders";
 
const reminders: Reminder[] = [];

const router = Router();
router.get('/', (req, res) => {
    res.send('Hello world')
})

router.post('/', (req, res) => {
   const {title} = req.body as CreateReminderDto;
   const reminder = new Reminder(title);
   reminders.push(reminder)
   res.status(201).json(reminders);
})


export default router;