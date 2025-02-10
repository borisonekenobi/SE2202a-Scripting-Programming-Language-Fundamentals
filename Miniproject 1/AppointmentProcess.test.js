const AppointmentProcess = require('./AppointmentProcess.js')

let patient = new AppointmentProcess.Patient("Test Subject");
let procedure = new AppointmentProcess.Procedure('Test instructions');
let visit = new AppointmentProcess.Visit('Test complaint');


procedure.setPatient(patient);
visit.setPatient(patient);
test('Appointments patient is protected',() => {expect(procedure.patient==undefined && visit.patient==undefined).toBe(true)});

test('Get Patient Works for Procedure',() => {expect(procedure.getPatient()==patient).toBe(true)});
test('Get Patient Works for Visit',() => {expect(visit.getPatient()==patient).toBe(true)});
test('Procedure Patient Access',() => {expect(procedure.getPatient().fullName).toBe("Test Subject")});
test('Visit Patient Access',() => {expect(visit.getPatient().fullName).toBe("Test Subject")});

test('Complaint is protected',() => {expect(visit.complaint==undefined ).toBe(true)});
test('Complaint is accessible',() => {expect(visit.getComplaint() ).toBe('Test complaint')});
test('Instructions are public',() => {expect(procedure.instructions ).toBe('Test instructions')});



test('Visit Schedule Appointment is accessible through __proto__ of __proto__',() => {expect(visit.__proto__.__proto__.scheduleAppointment==AppointmentProcess.Appointment.prototype.scheduleAppointment).toBe(true)});
test('Procedule Schedule Appointment is accessible through __proto__ of __proto__',() => {expect(procedure.__proto__.__proto__.scheduleAppointment==AppointmentProcess.Appointment.prototype.scheduleAppointment).toBe(true)});

//test('ScheduleAppointment is in __proto__ of visit',() => {expect(visit.__proto__.scheduleAppointment('today')).toBe('An appointment has been scheduled for Test Subject on today')});
