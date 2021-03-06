import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.get('/', (req, res) => {
    const appointments = appointmentsRepository.all();
    return res.json(appointments);
});

appointmentsRouter.post('/', (req, res) => {
    const { provider, date } = req.body;

    const parsedDate = startOfHour(parseISO(date));
    const findAppointmentInSameDate = appointmentsRepository.findByDate(
        parsedDate,
    );

    if (findAppointmentInSameDate) {
        return res.status(400).json({
            message: 'This appointment is already booked',
        });
    }

    const appointment = appointmentsRepository.create(provider, date);

    return res.json(appointment);
});

export default appointmentsRouter;
