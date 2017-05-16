import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.scss']
})
export class BasePageComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
