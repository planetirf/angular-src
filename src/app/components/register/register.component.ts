import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
// create property for each user field
  name: String;
  username: String;
  email: String;
  password: String;

  constructor() { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    console.log(124);
  }

}

// create method for form in html template


