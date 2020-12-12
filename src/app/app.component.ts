import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Dentais',
      url: 'dentais',
      icon: 'albums'
    },
    {
      title: 'Upload dos arquivos',
      url: 'uploader',
      icon: 'archive'
    },
    { 
      title: 'Material de dentais',
      url: 'material',
      icon: 'clipboard'
    },
    
    {
      title: 'Nova Dental',
      url: 'dental-novo',
      icon: 'add-circle'
    },
    { 
      title: 'Sair',
      url: 'sair',
      icon: 'exit'
    },

  ];
  public labels = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
