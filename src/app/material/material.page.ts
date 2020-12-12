import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { MaterialService } from 'src/app/services/material.service';
import { Material } from 'src/app/model/material';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-material',
  templateUrl: './material.page.html',
  styleUrls: ['./material.page.scss'],
})
export class MaterialPage implements OnInit {
  private loading: any;
  public materiais = new Array<Material>();
  private materiaisSubscription: Subscription;


  constructor( private loadingCtrl: LoadingController,
    private materialService: MaterialService,
    private toastCtrl: ToastController) { 
      this.materiaisSubscription = this.materialService.getMateriais().subscribe(data => {
        this.materiais = data;
      });
    }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.materiaisSubscription.unsubscribe();
  }
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async deleteMaterial(id: string) {
    try {
      await this.materialService.deleteMaterial(id);
    } catch (error) {
      this.presentToast('Erro ao tentar deletar');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }


}
