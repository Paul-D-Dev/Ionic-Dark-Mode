import { LocalStorageService } from './local-storage.service';
import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeModeService {

  constructor(private platform: Platform,
              private localStorageService: LocalStorageService) {
    this.platform.ready().then(() => {
      const preferDark = window.matchMedia('(prefers-color-scheme: dark)');
      
      preferDark.addEventListener('change', e => {
        this.setAppTheme(e.matches);
      })
    })
   }

   toggleTheme(ev: any) {
    this.setAppTheme(ev)
    this.localStorageService.setLocalStorage('darkMode', ev)
   }

   setAppTheme(dark: boolean) {
    if(dark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

   }





}
