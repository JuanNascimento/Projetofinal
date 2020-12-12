  import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Dental } from '../model/dental';
import { DentalService } from '../services/dental.service';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-dental-excluir',
  templateUrl: './dental-excluir.page.html',
  styleUrls: ['./dental-excluir.page.scss'],
})
export class DentalExcluirPage implements OnInit {

  dental : Dental = new Dental();

  constructor(private dentalServ : DentalService,
    private route: ActivatedRoute,
    private navCtrl : NavController,
    private template : TemplateService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(url=>{
      let id = url.get('id');
      
      this.dentalServ.buscaPorId(id).subscribe(response=>{
        this.dental = response;
        
      })

    })

  }

  excluir(){

  this.template.loading.then(load => {

      load.present();

      this.dentalServ.excluir(this.dental).subscribe(response => {

        load.dismiss();
        this.navCtrl.navigateForward(['/dentais']);
      }, erro => {
        load.dismiss();
        this.template.myAlert("Erro ao Cadastrar");
      })

    })
  }

}