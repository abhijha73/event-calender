import { Component, Input, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUpdateEventComponent } from '../add-update-event/add-update-event.component';
import { DeleteConfirmationComponent } from 'src/app/shared/components/delete-confirmation/delete-confirmation.component';
import { CurrentUserService } from 'src/app/shared/services/current-user.service';

@Component({
  selector: 'app-calender-view',
  templateUrl: './calender-view.component.html',
  styleUrls: ['./calender-view.component.scss'],
})
export class CalenderViewComponent {
  @Input() selectedDateForRange: any;
  @Input() currentMonthObj: any;
  datesArr: any = [];
  firstRowDates: any;
  secondrowDates: any;
  selectedDate: any;
  isMobileView: boolean = false;

  constructor(private dialog: MatDialog, private cus: CurrentUserService) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.datesArr = [];
    for (let prop in this.currentMonthObj) {
      this.datesArr.push({ key: prop, value: this.currentMonthObj[prop] });
    }
    let firstDay = new Date(Number(this.datesArr[0]['key'])).getDay();
    while (firstDay > 0) {
      this.datesArr.unshift({ key: 0 });
      firstDay--;
    }
  }

  ngOnInit(): void {}

  selectDateForPlan(day: any) {
    this.selectedDate = day;
  }
  editEvent(day: any) {
    this.dialog.open(AddUpdateEventComponent, {
      data: day,
      disableClose: true,
    });
  }
  deleteEvent(day: any) {
    this.dialog
      .open(DeleteConfirmationComponent)
      .afterClosed()
      .subscribe((data) => {
        if (data) {
          this.cus.deleteEvent(day);
        }
      });
  }
}
