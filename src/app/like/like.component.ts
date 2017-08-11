import {Component, Input, OnInit} from '@angular/core';
import {Like} from "../_interface/like.interface";

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() like: Like;

  constructor() {
  }

  ngOnInit() {
  }

}
