import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CmnServiceService {
  constructor() {}
  getPlatform() {
    if (window.innerWidth < 400) {
      return 'mobile';
    } else if (window.innerWidth > 400 && window.innerWidth < 700) {
      return 'tab';
    } else {
      return 'desktop';
    }
  }
}
