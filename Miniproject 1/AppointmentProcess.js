const Appointment = require('./Appointment.js');
const Visit = require('./Visit.js');
const Procedure = require('./Procedure.js');
const Patient = require('./Patient.js');

const johnSmith = new Patient("John Smith");
const aliceWonder = new Patient("Alice Wonder");

const ultrasound = new Procedure('Drink 3 glasses of water at least 1 hour before the procedure');
const bloodwork = new Procedure('Fast 12h prior to your appointment');

ultrasound.setPatient(johnSmith);
ultrasound.scheduleAppointment('Jan. 10th');
const johnVisit = new Visit('Persistant headaches');
johnVisit.setPatient(johnSmith);
johnVisit.scheduleAppointment('Feb. 1st');

bloodwork.setPatient(aliceWonder);
bloodwork.scheduleAppointment('Mar. 10th');
const aliceVisit = new Visit('Yearly physical');
aliceVisit.setPatient(aliceWonder);
aliceVisit.scheduleAppointment('Apr. 1st');

//Do not touch
module.exports.Appointment=Appointment;
module.exports.Visit=Visit;
module.exports.Procedure=Procedure;
module.exports.Patient=Patient;