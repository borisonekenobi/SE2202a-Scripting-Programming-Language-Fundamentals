class Appointment {
    #patient;

    constructor() {
        this.#patient = undefined;
    }

    setPatient(patient) {
        this.#patient = patient;
    }

    getPatient() {
        return this.#patient;
    }

    scheduleAppointment(date) {
        console.log(`An appointment has been scheduled for ${this.#patient.fullName} on ${date}`);
    }
}

module.exports = Appointment;