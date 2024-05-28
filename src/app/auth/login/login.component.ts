import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  setEmail(event: any) {
    this.email = event.target.value;
    // console.log(event.target.value);
    
  }

  setPassword(event: any){
    this.password = event.target.value;
    
  }

}
