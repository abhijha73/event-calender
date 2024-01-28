import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}
  setUserDetails(detailsStr: string) {
    window.localStorage['userDetails'] = detailsStr;
  }
  getUserDetails(): any {
    return JSON.parse(window.localStorage['userDetails']);
  }
  setMapData(data: any) {
    window.localStorage['eventMap'] = data;
  }
  getMapData(): any {
    return JSON.parse(window.localStorage['eventMap']);
  }
}
