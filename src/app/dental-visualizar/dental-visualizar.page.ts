import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Dental } from '../model/dental';
import { DentalService } from '../services/dental.service';

@Component({
  selector: 'app-dental-visualizar',
  templateUrl: 'dental-visualizar.page.html',
  styleUrls: ['./dental-visualizar.page.scss'],
})
export class DentalVisualizarPage implements OnInit {

dental : Dental = new Dental();

  constructor(private dentalServ : DentalService,
    private route: ActivatedRoute,
    private navCtrl : NavController) { }

  ngOnInit() {

    this.route.paramMap.subscribe(url=>{
      let id = url.get('id');
      
      this.dentalServ.buscaPorId(id).subscribe(response=>{
        this.dental = response;
        
      })

    })

  }

  atualizar(){
    this.navCtrl.navigateForward(['/dental-atualizar',this.dental.id]);
  }

  excluir(){
    this.navCtrl.navigateForward(['/dental-excluir',this.dental.id]);
  }

}