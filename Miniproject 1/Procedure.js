const Appointment = require('./Appointment.js');

class Procedure extends Appointment {
    constructor(instructions) {
        super();
        this.instructions = instructions;
    }

    scheduleAppointment(date) {
        super.scheduleAppointment(date);
        console.log(`The following pre-procedure instructions have been provided to ${this.getPatient().fullName}: ${this.instructions}`);
    }
}

module.exports = Procedure;