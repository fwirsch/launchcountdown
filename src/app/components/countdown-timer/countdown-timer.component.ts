import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {
  endTimeDate = "August 4, 2021 00:00:00 PDT";

  days: string = '';
  hours: string = '';
  minutes: string = '';
  seconds: string = '';

  interval: any;

  constructor() {}

  ngOnInit() {
    this.interval = setInterval(() => {
      this.countdown();
    }, 0);
  }

  private countdown() {
    const endTimeParse = Date.parse(this.endTimeDate) / 1000;
    const nowParse = Date.parse(new Date().toString()) / 1000;

    const timeLeft = endTimeParse - nowParse;

    let days = Math.floor(timeLeft / 86400);
    let hours = Math.floor((timeLeft - days * 86400) / 3600);
    let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    let seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    this.days = (days < 10) ? '0' + days : days.toString();
    this.hours = (hours < 10) ? '0' + hours : hours.toString();
    this.minutes = (minutes < 10) ? '0' + minutes : minutes.toString();
    this.seconds = (seconds < 10) ? '0' + seconds : seconds.toString();
  };
}
