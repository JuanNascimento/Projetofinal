import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Dental } from '../model/dental';

@Injectable()
export class DentalService{
    dental : Dental = new Dental();

    constructor(private firestore: AngularFirestore){

    }

    listaDeDentais() : Observable<any>{

     
        return from(new Observable(observe =>{ 
            
            
            this.firestore.collection('dental').snapshotChanges().subscribe(response=>{
               
                let lista: Dental[] = [];
                response.map(obj =>{
 
                    let dental: Dental = new Dental();
                   dental.setData(obj.payload.doc.data());
                   dental.id = obj.payload.doc.id; 
                    lista.push(dental); 
                });
                observe.next(lista);
            })

        }))
    }

    cadastrar(dental : any) : Observable<any>{
        return from(new Observable(observe => {
            this.firestore.collection('dental').add(dental).then(response=>{
                observe.next("Cadastrado com sucesso!");
            },(err)=>{
                observe.error("Erro ao cadastrar!");
            })

        }));   
    }

    buscaPorId(id : any) : Observable<any>{
        return from(new Observable(observe => {
            this.firestore.collection('dental').doc(id).snapshotChanges().subscribe(response=>{
                console.log(response);
                let dental : Dental = new Dental();
                dental.id = response.payload.id;
                dental.setData(response.payload.data());
                observe.next(dental);

            },(err)=>{
                observe.error("Erro ao buscar o ID!");
            })

        }));  
    }



    atualizar(dental : any)  : Observable<any>{
        return from(new Observable(observe => {

            this.firestore.collection('dental').doc(dental.id).set(dental).then(response=>{
                observe.next("Atualizado com sucesso!");
            },(err)=>{
                observe.error("Erro ao atualizar!");
            })

        })); 
    }

    excluir(dental : any)  : Observable<any>{
        return from(new Observable(observe => {

            this.firestore.collection('dental').doc(dental.id).delete().then(response=>{
                observe.next("Excluído com sucesso!");
            },(err)=>{
                observe.error("Erro ao excluir!");
            })

        })); 
    }


}