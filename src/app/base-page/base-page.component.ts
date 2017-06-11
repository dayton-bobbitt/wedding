import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.scss']
})
export class BasePageComponent implements OnInit {
  @Input() title: string;
  private route: string;

  constructor(private router: Router) {
    const url = this.router.url;
    this.route = url.substring(1);
  }

  ngOnInit() {
  }

}
