import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.scss']
})
export class FirebaseComponent implements OnInit {

  items: Observable<any[]>;
  collectionRef;
  name = ''; // input name

  constructor(private db: AngularFirestore) {
    // 依照建立時間排序
    this.collectionRef = this.db.collection('items', ref => ref.orderBy('created_at'));

    // Observable
    this.items = this.collectionRef.valueChanges();

    // 集合大小
    this.collectionRef.get().toPromise().then((snapshot) => {
      console.log('snapshot.size : ' + snapshot.size);
    }).catch((error) => {
      console.log('提取文件時出錯: ', error);
    });
  }

  ngOnInit() {}

  addItem(param: string) {
    const item = {
      name: param,
      created_at: new Date()
    };

    this.name = '';
    // add document to collection, create random id
    this.collectionRef.add(item).then((doc) => {
      // set random id to 'uid' after document was added
      this.collectionRef.doc(doc.id).update({uid: doc.id});
    });
  }

  deleteItem(uid) {
    // delete document by id
    this.collectionRef.doc(uid).delete();
  }

  deleteAllItem() {
    // get collection
    this.collectionRef.get().toPromise().then((snapshot) => {
      for (const doc of snapshot.docs) {
        doc.ref.delete();
      }
    }).catch((error) => {
      console.log('提取文件時出錯: ', error);
    });
  }
}
