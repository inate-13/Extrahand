import { Component } from '@angular/core';

import {TranslateService} from "@ngx-translate/core";





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'extraHand';

  constructor(public translate:TranslateService){
    translate.addLangs(['eng','hin']);
    translate.setDefaultLang('eng');
    const browserLang= translate.getBrowserLang();
     translate.use(browserLang?.match(/eng|hin/)?browserLang:'eng');
    this.role=localStorage.getItem('role');
  
  }

  role:any=null;

  
}
