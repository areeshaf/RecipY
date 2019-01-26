import { Component, OnInit  } from '@angular/core';
import { NgForm } from '@angular/forms' ;

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  passwordMatched: boolean  = true;
  submitted: boolean = false ;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

   onSubmit(form: NgForm){
      const email = form.value.email ;
      const password = form.value.password ;
      const confirmPassword = form.value.confirmPassword ;

      if(password !== confirmPassword){
        this.passwordMatched = false ;
      }
      else{
      	this.authService.signup(email , password) ;
      	this.submitted = true ;
      	form.reset();
      }
    }


}
