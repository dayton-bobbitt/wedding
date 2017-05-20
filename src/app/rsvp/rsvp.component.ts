import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {
  private details: string;
  private isAuthorized = false;

  constructor(private http: Http) { }

  ngOnInit() {
    this.getDetailsMessage();
  }

  private getDetailsMessage() {
    const options = new RequestOptions({ withCredentials: true });
    const url = `${environment.apiUrl}/${environment.validateUri}`;

    this.http.get(url, options).subscribe((response) => {
      const body = response.json();
      this.details = body.details;
      this.isAuthorized = true;
    }, (error) => {
      this.isAuthorized = false;
    });
  }

}
