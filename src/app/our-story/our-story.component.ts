import { Component, OnInit } from '@angular/core';

const timeInMs = {
  second: 1000,
  minute: 60000,
  hour: 3600000,
  day: 86400000
};

@Component({
  selector: 'our-story',
  templateUrl: './our-story.component.html'
})
export class OurStoryComponent implements OnInit {
  weddingDate = new Date(2017, 8, 2, 19);
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isInPast: boolean;

  constructor() { }

  ngOnInit() {
    this.setTimeRemaining();
    this.isInPast = this.days < 0;
    this.startCountdown();
  }

  setTimeRemaining() {
    const now = new Date();
    
    const days = (this.weddingDate.getTime() - now.getTime()) / timeInMs.day;
    this.days = Math.floor(days);

    const hours = (days % 1) * timeInMs.day / timeInMs.hour;
    this.hours = Math.floor(hours);

    const minutes = (hours % 1) * timeInMs.hour / timeInMs.minute;
    this.minutes = Math.floor(minutes);

    const seconds = (minutes % 1) * timeInMs.minute / timeInMs.second;
    this.seconds = Math.floor(seconds);
  }

  startCountdown() {
    setTimeout(() => {
        this.decrementSeconds();
    }, 1000);
  }

  decrementSeconds() {
    let seconds = this.seconds;

    if (--seconds < 0) {
        seconds = 59;
        this.decrementMinutes();
    }

    this.seconds = seconds;

    if (!this.isInPast) {
      setTimeout(() => {
        this.decrementSeconds();
      }, 1000);
    }
  }

  decrementMinutes() {
    let minutes = this.minutes;

    if (--minutes < 0) {
      minutes = 59;
      this.decrementHours();
    }

    this.minutes = minutes;
  }

  decrementHours() {
    let hours = this.hours;

    if (--hours < 0) {
      hours = 23;
      this.decrementDays();
    }

    this.hours = hours;
  }

  decrementDays() {
    --this.days;
    this.isInPast = this.days < 0;
  }

  getDateString(time, single, plural) {
    return (time !== 1) ? `${time} ${plural}` : `${time} ${single}`;
  }

}
