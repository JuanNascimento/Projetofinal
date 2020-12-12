import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Material } from '../model/material';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  private materiaisCollection: AngularFirestoreCollection<Material>;

  constructor(private afs: AngularFirestore) {
    this.materiaisCollection = this.afs.collection<Material>('Materiais');
  }

  getMateriais() {
    return this.materiaisCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    );
  }

  addMaterial(material: Material) {
    return this.materiaisCollection.add(material);
  }

  getMaterial(id: string) {
    return this.materiaisCollection.doc<Material>(id).valueChanges();
  }

  updateMaterial(id: string, material: Material) {
    return this.materiaisCollection.doc<Material>(id).update(material);
  }

  deleteMaterial(id: string) {
    return this.materiaisCollection.doc(id).delete();
  }
}