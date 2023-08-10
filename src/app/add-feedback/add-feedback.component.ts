import { Component, OnInit } from '@angular/core';

import { Feedback } from '../feedback'; // Import your Feedback class

import { FeedbackService } from '../feedback.service'; // Import your FeedbackService

import { Router } from '@angular/router';

 

@Component({

  selector: 'app-add-feedback',

  templateUrl: './add-feedback.component.html',

  styleUrls: ['./add-feedback.component.css']

})

export class AddFeedbackComponent implements OnInit {

  feedback: Feedback = new Feedback(); // Use your Feedback class

 

 

  //ratingOptions: number[] = [1, 2, 3, 4, 5]; // Define rating options

 

  constructor(private feedbackService: FeedbackService,

    private router: Router) { }

 

  ngOnInit(): void {

  }

 

  saveFeedback() {

    this.feedbackService.createFeedback(this.feedback).subscribe(data => {

      console.log(data);

      this.goToFeedbackList();

    },

    error => console.log(error));

  }

 

  goToFeedbackList() {

    this.router.navigate(['/feedbacks']); // Adjust the route accordingly

  }

 

  onSubmit() {

    console.log(this.feedback);

    this.saveFeedback();

  }

}

 