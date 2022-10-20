import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onHomeClick() {
    this.router.navigateByUrl('home');
  }
  onSaveClick() {
    this.router.navigateByUrl('save');
  }
  onTravelClick() {
    this.router.navigateByUrl('travel');
  }
  onExperienceClick() {
    this.router.navigateByUrl('experience');
  }
  onWalletClick() {
    this.router.navigateByUrl('wallet');
  }
  onContactUsClick() {
    this.router.navigateByUrl('contactus');
  }
}
