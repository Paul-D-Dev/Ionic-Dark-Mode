import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeModeService {
  darkMode = false;

  constructor(private platform: Platform) {
    this.platform.ready().then(() => {
      const preferDark = window.matchMedia('(prefers-color-scheme: dark)');
      
      preferDark.addEventListener('change', e => {
        this.setAppTheme(e.matches);
      })
    })
   }

   toggleTheme(ev: any) {
    this.darkMode = ev;
    this.setAppTheme(this.darkMode)
   }

   setAppTheme(dark: boolean) {
    this.darkMode = dark;
    if(this.darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

   }





}
