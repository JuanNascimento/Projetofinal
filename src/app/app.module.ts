import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';


import { environment } from 'src/environments/environment'; 
import { DentalService } from './services/dental.service';

import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { AngularFirestore} from '@angular/fire/firestore';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { FilePath } from '@ionic-native/file-path/ngx';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    AngularFireAuthModule
    
    
   
   
  ],
  providers: [
    StatusBar,
    AngularFirestore,
    SplashScreen, 
 
    DentalService,
    Camera,
    FileChooser,
    FilePath,
    File,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
