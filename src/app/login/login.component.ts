import {Component, OnInit} from '@angular/core';
import {AuthService} from "../_service/auth.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.logout()
  }

  onLogin(form: NgForm) {
    this.loading = true;
    this.authService.login(
      form.value.username,
      form.value.password)
      .subscribe(
        tokenData => {
          console.log(tokenData);
        },
        error => {
          console.log(error);
          this.loading = false;
        }
      );
  }
}
