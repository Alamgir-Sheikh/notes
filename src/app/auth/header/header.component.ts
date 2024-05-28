import { Component, NgModule } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { commonImports } from '../../imports';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [RegisterComponent, LoginComponent, commonImports],
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  // regComp = new RegisterComponent();
  isReg = true;

  register() {
    if (!this.isReg) this.isReg = true;
  }

  login() {
    if (this.isReg) this.isReg = false;
  }
}
