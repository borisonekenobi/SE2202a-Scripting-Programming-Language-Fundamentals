const Appointment = require('./Appointment.js');

class Visit extends Appointment {
    #complaint;

    constructor(complaint) {
        super();
        this.#complaint = complaint;
    }

    setComplaint(c) {
        this.#complaint = c;
    }

    getComplaint() {
        return this.#complaint;
    }

    scheduleAppointment(date) {
        super.scheduleAppointment(date);
        console.log(`${this.getPatient().fullName}'s appointment's main complaint has been recorded as: ${this.#complaint}`);
    }
}

module.exports = Visit;