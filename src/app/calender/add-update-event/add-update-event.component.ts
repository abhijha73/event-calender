import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CurrentUserService } from 'src/app/shared/services/current-user.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-add-update-event',
  templateUrl: './add-update-event.component.html',
  styleUrls: ['./add-update-event.component.scss'],
})
export class AddUpdateEventComponent implements OnInit {
  selectedDate: any;
  minDate: any;
  maxDate: any;
  eventName: any;
  currentMapObject: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public injectedData: any,
    private cus: CurrentUserService,
    private ls: LocalStorageService,
    private dialogRef: MatDialogRef<AddUpdateEventComponent>
  ) {}
  ngOnInit(): void {
    if (this.injectedData) {
      let selectedDate = new Date(Number(this.injectedData.key));
      this.eventName = this.injectedData.value[0];
      this.selectedDate = new Date(
        selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000
      )
        .toISOString()
        .split('T')[0];
    }
    this.currentMapObject = this.cus.yearAndMonthSubject.value;
    this.minDate = new Date(
      this.cus.currentRollingDate.getTime() -
        this.cus.currentRollingDate.getTimezoneOffset() * 60000
    )
      .toISOString()
      .split('T')[0];
    let endDate = new Date(
      this.cus.currentRollingDate.getFullYear(),
      this.cus.currentRollingDate.getMonth() + 1,
      0,
      23,
      59,
      59
    );
    this.maxDate = new Date(
      endDate.getTime() - endDate.getTimezoneOffset() * 60000
    )
      .toISOString()
      .split('T')[0];
  }

  closeDialogue() {
    this.dialogRef.close();
  }
  submitEvent() {
    let eventDateKey = new Date(this.selectedDate).setHours(0, 0, 0, 0);
    let key = this.cus.currentRollingDate.getTime();
    let monthObj = this.currentMapObject.get(key);
    monthObj[eventDateKey].pop();
    monthObj[eventDateKey].push(this.eventName);
    this.currentMapObject.set(key, monthObj);
    this.cus.yearAndMonthSubject.next(this.currentMapObject);
    this.ls.setMapData(JSON.stringify([...this.currentMapObject]));
    this.dialogRef.close();
  }
}
