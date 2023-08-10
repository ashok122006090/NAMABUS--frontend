import { Component, OnInit } from '@angular/core';

import { Feedback  } from '../feedback'; // Adjust the import path for your Feedback model

import { FeedbackService } from '../feedback.service'; // Adjust the import path for your FeedbackService

import { Router } from '@angular/router';

 

@Component({

  selector: 'app-feedback-list',

  templateUrl: './feedback-list.component.html',

  styleUrls: ['./feedback-list.component.css']

})

export class FeedbackListComponent implements OnInit {

  feedbacks: Feedback[] = [];

 

  constructor(private feedbackService: FeedbackService, private router: Router) {}

 

  ngOnInit(): void {

    this.getFeedbacks();

  }

 

  private getFeedbacks() {

    this.feedbackService.getAllFeedbacks().subscribe(data => {

      this.feedbacks = data;

    });

  }

 

  editFeedback(id: number) {

    // Implement the edit functionality here

  }

 

  deleteFeedback(id: number) {

    this.feedbackService.deleteFeedback(id).subscribe(data => {

      console.log(data);

      this.getFeedbacks();

    });

  }

}

 