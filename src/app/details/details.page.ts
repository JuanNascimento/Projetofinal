import { Component, OnInit } from '@angular/core';
import { MaterialService } from 'src/app/services/material.service';
import { ActivatedRoute } from '@angular/router';
import { Material } from 'src/app/model/material';
import { NavController, LoadingController, ToastController } from '@ionic/angular';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  private materialId: string = null;
  public material: Material = {};
  private loading: any;
  private materialSubscription: Subscription;

  constructor(
    private materialService: MaterialService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    
    private toastCtrl: ToastController
  ) {
    this.materialId = this.activatedRoute.snapshot.params['id'];

    if (this.materialId) this.loadProduct();
  }

  ngOnInit() { }

  ngOnDestroy() {
    if (this.materialSubscription) this.materialSubscription.unsubscribe();
  }

  loadProduct() {
    this.materialSubscription = this.materialService.getMaterial(this.materialId).subscribe(data => {
      this.material = data;
    });
  }

  async saveMaterial() {
    await this.presentLoading();
    

    if (this.materialId) {
      try {
        await this.materialService.updateMaterial(this.materialId, this.material);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/material');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
    } else {
      this.material.createdAt = new Date().getTime();

      try {
        await this.materialService.addMaterial(this.material);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/material');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }
}