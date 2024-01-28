import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CurrentUserService } from 'src/app/shared/services/current-user.service';
import { AddUpdateEventComponent } from '../add-update-event/add-update-event.component';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-calender-home',
  templateUrl: './calender-home.component.html',
  styleUrls: ['./calender-home.component.scss'],
})
export class CalenderHomeComponent implements OnInit {
  todaysDate: any;
  currentMonthObj: any;
  constructor(
    public cus: CurrentUserService,
    private dialog: MatDialog,
    private auth: AuthService
  ) {}
  ngOnInit(): void {
    this.todaysDate = this.cus.getFirstDateOfMonth();
    this.cus.getAllDatesInMonth(new Date());
    this.cus.yearAndMonthSubject.subscribe((data) => {
      this.currentMonthObj = data.get(this.cus.currentRollingDate.getTime());
      this.todaysDate = this.cus.currentRollingDate;
    });
  }

  goToPreviousMonth() {
    this.cus.generatePreviousMonthSequence();
  }
  goToNextMonth() {
    this.cus.generateNextMonthSequence();
  }
  createNewEvent() {
    this.dialog.open(AddUpdateEventComponent, {
      data: undefined,
      disableClose: true,
    });
  }
  optForLogout() {
    this.auth.logout(); 
  }
}
