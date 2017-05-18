import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  private isAuthorized = false;

  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
    this.isGuestValid().then(() => {
      this.isAuthorized = true
    }).catch((error) => console.log('Guest not authorized'));
  }

  private validateGuest(eventKey: string) {
    const headers = new Headers();
    headers.set('eventkey', eventKey);

    this.isGuestValid(headers)
    .then(() => this.router.navigateByUrl('/our-story'))
    .catch((err) => alert('Invalid event code'));
  }

  private isGuestValid(headers?: Headers) {
    const options = new RequestOptions({ headers, withCredentials: true });
    const url = 'http://localhost:3000/api/guest/validate';
    return new Promise((resolve, reject) => {
      this.http.get(url, options).subscribe(res => resolve(res), err => reject(err));
    });
  }

}
