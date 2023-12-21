// grid.component.ts
import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.components.html',
  styleUrls: ['./grid.components.scss']
})
export class GridComponents {

  constructor(private commonService: CommonService) {
    this.title = ''; // Initialize title
    this.description = ''; // Initialize description
  }

  title: string;
  description: string;

  // Create a public getter method for commonService
  getCommonService(): CommonService {
    return this.commonService;
  }

  posts = [
    {
      title: 'TROPICAL ESCAPE',
      upvotes: 0,
      description:
        'How about a giveaway today!  Our friends from Button Farm Club are giving away the February Mini Album Kit.  It is jammed packed with our very own, You Are Here collection.',
    },
    {
      title: 'CARPE DIEM LOVE',
      upvotes: 0,
      description:
        'Hello friends! Jennifer on the blog today with my first post for Simple Stories! I am beyond excited to be here to share layouts I created using the new Carpe Diem Scrapbooking collection! ',
    },
    {
      title: 'TROPICAL ESCAPE',
      upvotes: 0,
      description:
        'How about a giveaway today!  Our friends from Button Farm Club are giving away the February Mini Album Kit.  It is jammed packed with our very own, You Are Here collection.',
    },
  ];

  addPost() {
    if (!this.title) {
      return;
    }
    this.posts.push({
      title: this.title,
      description: this.description,
      upvotes: 0,
    });
    this.title = '';
    this.description = '';
  }

  upvote(post: { upvotes: number; }) {
    post.upvotes += 1;
  }
}
