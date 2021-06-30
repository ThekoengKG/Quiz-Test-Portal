
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  signedUp: boolean = false;

  constructor(private _router: Router) { }

  ngOnInit(): void {
   
  }

  signUp(){

    this._router.navigate(['/register']);
  }

  logIn(){
    this._router.navigate(['/login']);

  }



}
