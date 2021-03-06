import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Component, OnInit } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';



@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.page.html',
  styleUrls: ['./uploader.page.scss'],
})
export class UploaderPage implements OnInit {
  public uploadPercent: Observable<number>;
  public downloadUrl: Observable<string>;
  
 constructor(
  private camera : Camera,
  private platform: Platform,
  private file: File,
  private afStorage: AngularFireStorage){

 }

  ngOnInit() {
  }
 
  async openGalery(){
    const options: CameraOptions = {
      quality:100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true
    };

    try{
      const fileUri: string = await this.camera.getPicture(options);

      let file: string;

      if(this.platform.is('ios')) {
        file = fileUri.split('/').pop();
      }else{
        file = fileUri.substring(fileUri.lastIndexOf('/') + 1, fileUri.indexOf('?'));
      }

      const path: string = fileUri.substring(0, fileUri.lastIndexOf('/'));

      const buffer: ArrayBuffer = await this.file.readAsArrayBuffer(path,file);
      const blob: Blob = new Blob([buffer],{type: 'image/jpeg'});

      this.uploadPicture(blob);
    }catch(error){
      console.log(error);
    }

  }
  uploadPicture(blob: Blob){
    const ref = this.afStorage.ref('ionic.jpg');
    const task = ref.put(blob);

    this.uploadPercent = task.percentageChanges();

    task.snapshotChanges().pipe(
      finalize(() => this.downloadUrl = ref.getDownloadURL())
    ).subscribe();
  }
}
