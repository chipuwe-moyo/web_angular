import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from "../_service/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  onRegister(form: NgForm) {
    this.authService.register(
      form.value.first_name,
      form.value.last_name,
      form.value.username,
      form.value.password,
      form.value.street_address,
      form.value.city,
      form.value.province,
      form.value.country,
      form.value.email,
      form.value.phone_number)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }

}
