import { AuthGuard } from './services/auth.guard';
import { appRoutes } from './app-routing-modules/app-routing-module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

//Import ReactiveFormesModule
//Import FormsModule
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuizTestComponent } from './quiz-test/quiz-test.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { quizApiService } from './services/quiz-api.service';
import { NavbarComponent } from './navbar/navbar.component';
import { BackgroundColorDirective } from './background-color.directive';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizTestComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    BackgroundColorDirective,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
