import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
username: string=""
password: string=""
tipo:     boolean;
  constructor(public afAuth : AngularFireAuth,
    private toastr: ToastController,
    private router: Router
   ) { }

  ngOnInit() {
  }

async register(){
  const {username,password} = this
  try{
    const res= await this.afAuth.createUserWithEmailAndPassword(username,password)
    console.log(res);
    this.toast('Sua conta foi registrada com sucesso!','success');
    this.router.navigate(['/login']);
  }catch(error){
console.dir(error);
this.toast(error.message,'Sua conta não foi registrada!');
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
exibirOuOcultar(){
  this.tipo = !this.tipo;
}
}
