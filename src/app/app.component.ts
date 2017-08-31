import {Component} from '@angular/core';
import {AuthService} from "./_service/auth.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {SearchService} from "./_service/search.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor(private authService: AuthService, private router: Router, private searchService: SearchService){
  }

  onSearch(form: NgForm){
    this.searchService.query = form.value.query;
    this.router.navigate(['/search'])
  }

}
