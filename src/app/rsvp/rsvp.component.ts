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
  details: string;
  contactEmail: string;
  isAuthorized = false;
  isAttending: boolean;
  numAttending = 1;
  invalidNumAttending = false;
  rsvpSearchInitiated = false;
  isRsvpFound = false;
  guestIsRsvp = false;
  isRsvpComplete = false;
  isUpdatingRsvp = false;
  rsvpSubmitError = false;
  rsvpDetails;

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.getDetailsMessage().subscribe(res => {}, err => {});
    this.getGuestRsvp();
  }

  validateGuest(eventKey: string) {
    const headers = new Headers();
    headers.set('eventkey', eventKey);

    this.getDetailsMessage(headers).subscribe((res) => {}, (err) => {
      alert('Invalid event code');
    });
  }

  getDetailsMessage(headers?: Headers): Observable<any> {
    const options = new RequestOptions({ headers, withCredentials: true });
    const url = `${environment.apiUrl}/${environment.validateUri}`;

    return new Observable((observer) => {
      this.http.get(url, options).subscribe((response) => {
        const body = response.json();
        this.details = body.details;
        this.contactEmail = body.contactEmail;
        this.isAuthorized = true;
        observer.next();
      }, (error) => {
        this.isAuthorized = false;
        observer.error();
      });
    });
  }

  getGuestRsvp() {
    const options = new RequestOptions({ withCredentials: true });
    const url = `${environment.apiUrl}/${environment.isRsvpUri}`;
    
    this.http.get(url, options).subscribe((response) => {
      this.isUpdatingRsvp = true;
      this.isRsvpComplete = true;
      this.isRsvpFound = true;
      this.rsvpSearchInitiated = true;
      this.isAttending = undefined;
      this.rsvpDetails = response.json();
    }, (error) => {
      this.isUpdatingRsvp = false;
      this.isRsvpComplete = false;
      this.rsvpSubmitError = true;
    });
  }

  findRsvp(lastName: string, address: string) {
    this.rsvpSearchInitiated = true;

    const headers = new Headers();
    headers.set('lastname', lastName);
    headers.set('address', address);

    const options = new RequestOptions({ headers, withCredentials: true });
    const url = `${environment.apiUrl}/${environment.rsvpUri}`;

    this.http.get(url, options).subscribe((response) => {
      this.isRsvpFound = true;
      this.rsvpDetails = response.json();
    }, (error) => {
      this.isRsvpFound = false;
    });
  }

  guestAnsweredAttending() {
    return typeof this.isAttending !== 'undefined';
  }

  setAttending(isAttending: boolean) {
    this.isAttending = isAttending;
  }

  setNumAttending(numAttending: number) {
    if (numAttending > 0 && numAttending <= this.rsvpDetails.maxAttending) {
      this.numAttending = numAttending;
      this.invalidNumAttending = false;
    } else {
      this.invalidNumAttending = true;
    }
  }

  submitRSVP() {
    const options = new RequestOptions({ withCredentials: true });
    const url = `${environment.apiUrl}/${environment.rsvpUri}`;
    const body = {
      id: this.rsvpDetails.id,
      numAttending: this.numAttending,
      declined: !this.isAttending
    };
    
    this.http.post(url, body, options).subscribe((response) => {
      this.isRsvpComplete = true;
      this.isUpdatingRsvp = true;
      this.rsvpSubmitError = false;
    }, (error) => {
      this.isRsvpComplete = false;
      this.rsvpSubmitError = true;
    });
  }

  editRSVP() {
    this.numAttending = 1;
    this.isAttending = undefined;
    this.isRsvpComplete = false;
  }

  showSearchForm() {
    return this.isAuthorized && !this.isUpdatingRsvp;
  }

}
