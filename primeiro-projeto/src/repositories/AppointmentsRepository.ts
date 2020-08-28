import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

class AppointmentsRepository {
    private appointments: Appointment[];

    constructor() {
        this.appointments = [];
    }

    /**
     * all
     */
    public all(): Appointment[] {
        return this.appointments;
    }

    /**
     * findByDate
     */
    public findByDate(date: Date): Appointment | null {
        const findAppointment = this.appointments.find(appointment => {
            return isEqual(date, appointment.date);
        });

        return findAppointment || null;
    }

    /**
     * create
     */
    public create(provider: string, date: Date): Appointment {
        const appointment = new Appointment(provider, date);

        this.appointments.push(appointment);

        return appointment;
    }
}

export default AppointmentsRepository;
