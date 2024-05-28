import { Component, Injector, OnInit, inject } from '@angular/core';
import { FireUserService } from '../../service/firesrv.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import {
  CollectionReference,
  DocumentReference,
  Firestore,
  addDoc,
  collection,
} from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Users } from '../../model/users.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, AngularFireModule, AngularFireAuthModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  firstName = '';
  lastName = '';
  email: string = '';
  registerDisabled = true;
  password: string = '';
  confirmPassword: string = '';
  firebaseService = inject(FireUserService);
  // firestore = inject(AngularFirestore);
  usersCollection!: CollectionReference;

  constructor() {}

  setFirstName(event: any) {
    this.firstName = event.target.value;
  }

  setLastName(event: any) {
    this.lastName = event.target.value;
  }

  setEmail(event: any) {
    this.email = event.target.value;
  }

  setPassword(event: any) {
    this.password = event.target.value;
  }

  setConfirmPassword(event: any) {
    this.confirmPassword = event.target.value;
    this.comparePassword();
  }

  comparePassword() {
    if (this.password === '' && this.confirmPassword === '') {
      return false;
    }
    if (this.password === this.confirmPassword) {
      this.registerDisabled = true;
      return this.registerDisabled;
    } else {
      this.registerDisabled = false;
      return this.registerDisabled;
    }
  }

  checkLength() {
    if (this.password.length >= 6) {
      return true;
    } else {
      return false;
    }
  }

  doRegister() {
    // console.log(event);
    console.log('HERE');
    // console.log(this.auth);

    this.firebaseService.createUser(
      this.firstName,
      this.lastName,
      this.email,
      this.password
    );
  //   addDoc(
  //     this.usersCollection,
  //     new Users(
  //       this.email,
  //       this.password,
  //       this.firstName,
  //       this.lastName
  //     ).toJson()
  //   )
  //     .then((documentReference: DocumentReference) => {
  //       console.log(documentReference);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  }
}
