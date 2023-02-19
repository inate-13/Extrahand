import { NgbDate } from "@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module";

export class weightdesc{
    constructor(public appointmentId:number, public name:String,
        public emailId: String,
        public phoneNo: number,
        public appointmentTime: NgbDate,
        public description: String,
        public status: String,
        public serviceId: String
        ){
    }
}