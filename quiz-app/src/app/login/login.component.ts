import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], 
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  user: User = new User();
  userList: Array<User> = [];
  userform: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _router: Router, private _userService: UserService) { }


  ngOnInit(): void {
    this.userform = this._formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['',[Validators.required, Validators.minLength(6)]], 
    });
  }


  get f() {
    return this.userform?.controls;
  }

  onSubmit() {
   
    console.log(this.userform);
    
  }

  login(){

      this._userService.getUsers().subscribe(result => {
      console.log(result);
      this.userList = result;
      for(let i =0; i < this.userList.length; i++){
        if(this.userList[i].username == this.user.username){
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('user', this.user.username);
          this._router.navigate(['/quiz-test']);
        }

      }
    }, (error) => console.log(error));


  }

  signUp(){
    this._router.navigate(['/register']);

  }

}
