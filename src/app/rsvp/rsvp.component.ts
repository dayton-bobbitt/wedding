import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

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
    this.getDetailsMessage().subscribe(res => {}, err => {});
  }

  private validateGuest(eventKey: string) {
    const headers = new Headers();
    headers.set('eventkey', eventKey);

    this.getDetailsMessage(headers).subscribe((res) => {}, (err) => {
      alert('Invalid event code');
    });
  }

  private getDetailsMessage(headers?: Headers): Observable<any> {
    const options = new RequestOptions({ headers, withCredentials: true });
    const url = `${environment.apiUrl}/${environment.validateUri}`;

    return new Observable((observer) => {
      this.http.get(url, options).subscribe((response) => {
        const body = response.json();
        this.details = body.details;
        this.isAuthorized = true;
        observer.next();
      }, (error) => {
        this.isAuthorized = false;
        observer.error();
      });
    });
  }

}
