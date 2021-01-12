import { LocalStorageService } from './services/local-storage.service';
import { ThemeModeService } from './services/theme-mode.service';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private themeModeService: ThemeModeService,
    private localStorageService: LocalStorageService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (this.localStorageService.getLocalStorage('darkMode')) {
        this.themeModeService.setAppTheme(this.localStorageService.getLocalStorage('darkMode'));
        this.themeModeService.darkMode.next(this.localStorageService.getLocalStorage('darkMode'));
      }
    });
  }
}
