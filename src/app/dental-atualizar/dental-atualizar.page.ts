
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Dental } from '../model/dental';
import { DentalService } from '../services/dental.service';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-dental-atualizar',
  templateUrl: './dental-atualizar.page.html',
  styleUrls: ['./dental-atualizar.page.scss'],
})
export class DentalAtualizarPage implements OnInit {

  formGroup : FormGroup;
  dental : Dental = new Dental();

  constructor(private dentalServ : DentalService,
    private route: ActivatedRoute,
    private navCtrl : NavController,
    private formBuilder : FormBuilder,
    private template : TemplateService) {
      this.iniciarForm();
    }

  ngOnInit() {

    this.route.paramMap.subscribe(url=>{
      let id = url.get('id');
      
      this.dentalServ.buscaPorId(id).subscribe(response=>{
        this.dental = response;
        this.iniciarForm();
      })

    })

  }

  atualizar() {
    this.template.loading.then(load => {

      load.present();

      this.dentalServ.atualizar(this.formGroup.value).subscribe(response => {
        console.log("OK");
        load.dismiss();
        this.template.myAlert(response);
      }, erro => {
        console.log("Erro");
        load.dismiss();
        this.template.myAlert("Erro ao Cadastrar");
      })

    })
  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      id: [this.dental.id],
      nome: [this.dental.nome],
      link: [this.dental.link],
      endereco: [this.dental.endereco],
      numero: [this.dental.numero],
      cidade: [this.dental.cidade],
      estado: [this.dental.estado],
      email: [this.dental.email],
      telefone: [this.dental.telefone]
    })
  }

}