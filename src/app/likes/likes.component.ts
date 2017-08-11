import {Component, OnInit} from '@angular/core';
import {Like} from "../_interface/like.interface";
import {LikeService} from "../_service/like.service";

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  likes: Like[];

  constructor(private likeService: LikeService) {
  }

  ngOnInit() {
  }

  onGetLikes() {
    this.likeService.getLikes()
      .subscribe(
        (likes: Like[]) => this.likes = likes
      );
  }

}
