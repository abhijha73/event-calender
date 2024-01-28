import { CurrentUserService } from './shared/services/current-user.service';
import { LocalStorageService } from './shared/services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'event-calender';
  constructor(
    private ls: LocalStorageService,
    private cus: CurrentUserService
  ) {}
  ngOnInit(): void {
    let dataFromLocalStorage = this.ls.getMapData();
    if (dataFromLocalStorage) {
    
    }
  }
}
