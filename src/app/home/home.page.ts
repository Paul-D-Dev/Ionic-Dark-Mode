import { ThemeModeService } from './../services/theme-mode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  darkMode: boolean;

  constructor(private themeModeService: ThemeModeService) {}

  ngOnInit() {
    this.darkMode = this.themeModeService.darkMode;
  }

  changeMode() {
    this.darkMode = !this.darkMode;
    this.themeModeService.toggleTheme(this.darkMode);
  }

  changeTheme(ev: any) {
    this.darkMode = ev.detail.checked;
    this.themeModeService.toggleTheme(ev.detail.checked);
  }
}
