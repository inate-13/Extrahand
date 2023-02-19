import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-boat-service',
  templateUrl: './chat-boat-service.component.html',
  styleUrls: ['./chat-boat-service.component.css']
})
export class ChatBoatServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"231e33edcf80a52cb289cfdab220c2e26","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        
        (window as any).kommunicate = m; m._globals = kommunicateSettings;
    })
    
    (document, (window as any).kommunicate || {});
  }

}
