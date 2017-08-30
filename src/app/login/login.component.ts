import {Component, OnInit} from '@angular/core';
import {AuthService} from "../_service/auth.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.authService.logout()
  }

  onLogin(form: NgForm) {
    this.authService.login(
      form.value.username,
      form.value.password)
      .subscribe(result => {
        if (result === true) {
          // login successful
          this.router.navigate(['/']);
        } else {
          // login failed
          alert('Username or password is incorrect');
        }
      });
  }
}
