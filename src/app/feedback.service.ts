import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Feedback } from './feedback'; // Adjust the import path for your Feedback model

 

@Injectable({

  providedIn: 'root'

})

export class FeedbackService {

  private apiUrl = "http://localhost:8070/api/feedbacks"; // Adjust the API endpoint

 

  constructor(private httpClient: HttpClient) {}

 

  getAllFeedbacks(): Observable<Feedback[]> {

    return this.httpClient.get<Feedback[]>(`${this.apiUrl}`);

  }

 

  getFeedbackById(id: number): Observable<Feedback> {

    return this.httpClient.get<Feedback>(`${this.apiUrl}/${id}`);

  }

 

  createFeedback(feedback: Feedback): Observable<Feedback> {

    return this.httpClient.post<Feedback>(`${this.apiUrl}`, feedback);

  }

 

 

 

  deleteFeedback(id: number): Observable<void> {

    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);

  }

}