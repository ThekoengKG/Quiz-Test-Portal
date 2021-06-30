import { UserService } from './../services/user.service';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  userform: FormGroup;



  constructor(private _formBuilder: FormBuilder, private _router: Router, private _userService: UserService) { }

  ngOnInit(): void {
    this.userform = this._formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.required],
      password: ['',[Validators.required, Validators.minLength(6)]], 
    });

   
  }

  register(){
     //User Service
     this._userService.registerUser(this.user).subscribe(result => {
      console.log(result);
      console.log('User Added Successfully!!');
      this._router.navigate(['/login']);
    }, (error) => {console.log('There is an error : ' + error)});
  }

  get f() {
    return this.userform?.controls;
  }

  onSubmit() {
   
    console.log(this.userform);
   
  }

  logIn(){
    this._router.navigate(['/login']);

  }
 

}
