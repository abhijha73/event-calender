import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService implements OnInit {
  currentRollingDate = new Date();
  public yearAndMonthSubject = new BehaviorSubject<any>(new Map());
  constructor() {}
  ngOnInit(): void {
    this.getFirstDateOfMonth();
  }
  getAllDatesInMonth(date: any) {
    let year = date.getFullYear();
    let month = date.getMonth();
    let start = new Date(year, month, 1);
    let startDate = new Date(year, month, 1);
    let endDate = new Date(year, month + 1, 1);
    let datesObj: any = {};
    while (startDate < endDate) {
      datesObj[new Date(startDate).getTime()] = [];
      startDate.setDate(startDate.getDate() + 1);
    }
    let currentMapValue = this.yearAndMonthSubject.value;
    currentMapValue.set(start.getTime(), datesObj);
    this.yearAndMonthSubject.next(currentMapValue);
  }
  getFirstDateOfMonth() {
    let start = new Date(
      this.currentRollingDate.getFullYear(),
      this.currentRollingDate.getMonth(),
      1
    );
    this.currentRollingDate = start;
    return start.getTime();
  }
  generatePreviousMonthSequence() {
    let now = this.currentRollingDate;
    let res: any;
    if (now.getMonth() == 0) {
      res = new Date(now.getFullYear() - 1, 11, 1);
    } else {
      res = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    }
    this.currentRollingDate = res;
    if (!this.yearAndMonthSubject.value.has(res.getTime())) {
      this.getAllDatesInMonth(res);
    } else {
      let currentMapValue = this.yearAndMonthSubject.value;
      this.yearAndMonthSubject.next(currentMapValue);
    }
  }
  generateNextMonthSequence() {
    let now = this.currentRollingDate;
    let res: any;
    if (now.getMonth() == 11) {
      res = new Date(now.getFullYear() + 1, 0, 1);
    } else {
      res = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    }
    this.currentRollingDate = res;
    if (!this.yearAndMonthSubject.value.has(res.getTime())) {
      this.getAllDatesInMonth(res);
    } else {
      let currentMapValue = this.yearAndMonthSubject.value;
      this.yearAndMonthSubject.next(currentMapValue);
    }
  }
  deleteEvent(day: any) {
    let currentMapObject = this.yearAndMonthSubject.value;
    let eventDateKey = new Date(Number(day.key)).setHours(0, 0, 0, 0);
    let key = this.currentRollingDate.getTime();
    let monthObj = currentMapObject.get(key);
    monthObj[eventDateKey].pop();
    currentMapObject.set(key, monthObj);
    this.yearAndMonthSubject.next(currentMapObject);
  }
}
