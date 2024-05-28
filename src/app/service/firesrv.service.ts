import { Injectable, inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Users } from '../model/users.model';
import { createUserWithEmailAndPassword, Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FireUserService {
  constructor(
    private auth: Auth,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  createUser(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // this.firestore
        //   .doc('users')
        //   .set(new Users(email, password, firstName, lastName).toJson());
        this.firestore
          .collection('/users')
          .add(new Users(email, password, firstName, lastName).toJson());
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
