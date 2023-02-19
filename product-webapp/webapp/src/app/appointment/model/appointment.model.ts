import { NgbDate } from "@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module";

export class Appointment{

    appointmentId!: number;
    name!: String;
    emailId!: String;
    phoneNo!: number;
    appointmentTime!: NgbDate;
    description!: String;
    status!: String;
    serviceId!: String;

}
