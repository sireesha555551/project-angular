import { Component, OnInit } from '@angular/core';
import { connectService } from "../connect.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[connectService]
})
export class LoginComponent implements OnInit {


  constructor(private service:connectService) { 

  }

  ngOnInit() {
  }
  submit(l){
    let data=l.value
    this.service.login(data);
    
  }
}
