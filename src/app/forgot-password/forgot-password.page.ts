
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

username:string;


 
  constructor(
    private afauth: AngularFireAuth,
    private toastr: ToastController,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { 
    
  }

  ngOnInit() {
  }

  

  
async resetPassword(){
  if(this.username){
  const loading = await this.loadingCtrl.create({
    message: 'Please wait..',
    spinner: 'crescent',
    showBackdrop: true
  });
  loading.present();
  this.afauth.sendPasswordResetEmail(this.username).then(() => {
    loading.dismiss();
    this.toast('Por favor cheque seu email','success');
    this.router.navigate(['/login']);
  })
  .catch((error)=>{
    loading.dismiss();
    this.toast(error.message,'danger');
  })
} else {
  this.toast('Por favor entre com seu email!','danger');

}
}
async toast(message,status)
{
  const toast = await this.toastr.create({
    message: message,
    position: 'top',
    color: status,
    duration: 2000
  });
  toast.present();
}
}
