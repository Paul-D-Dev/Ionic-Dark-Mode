import { LocalStorageService } from './../services/local-storage.service';
import { ThemeModeService } from './../services/theme-mode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  darkMode: boolean = false;

  constructor(private themeModeService: ThemeModeService,
              private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.darkMode = this.localStorageService.getLocalStorage('darkMode', this.darkMode);      
    this.themeModeService.setAppTheme(this.darkMode);
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
