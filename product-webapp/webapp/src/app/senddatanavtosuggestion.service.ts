import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SenddatanavtosuggestionService {

  message:any
  constructor() { }

  setdata(data:any)
  {
    this.message=data;
  }

  invokEvent:Subject<any> =new Subject();
  callMethod(){
    alert("Se")
    this.invokEvent.next("someValue");
}

  getdata()
  {
    return this.message;

  }
}
function somevalue(somevalue: any) {
  throw new Error('Function not implemented.');
}

