import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  private isAuthorized = false;

  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
    this.isGuestValid().subscribe((res) => {
      this.isAuthorized = true
    }, (err) => console.log('Guest not authorized'));
  }

  private validateGuest(eventKey: string) {
    const headers = new Headers();
    headers.set('eventkey', eventKey);

    this.isGuestValid(headers).subscribe((res) => {
      this.router.navigateByUrl('/our-story');
    }, (err) => {
      alert('Invalid event code')
    });
  }

  private isGuestValid(headers?: Headers): Observable<any> {
    const options = new RequestOptions({ headers, withCredentials: true });
    const url = `${environment.apiUrl}/${environment.validateUri}`;

    return new Observable((observer) => {
      this.http.get(url, options).subscribe(res => observer.next(res), err => observer.error(err));
    });
  }

}
