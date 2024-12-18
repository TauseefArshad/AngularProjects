import { Component } from '@angular/core';

@Component({
  selector: 'app-login-new',
  imports: [],
  templateUrl: './login-new.component.html',
  styleUrl: './login-new.component.css'
})
export class LoginNewComponent {
  name:any = '';
  Product = {
     Name: 'Samsung TV',
     Price: 0,
     Stock :true
}
}
