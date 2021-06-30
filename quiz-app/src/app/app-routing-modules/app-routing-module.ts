import { LoginComponent } from './../login/login.component';
import { AuthGuard } from './../services/auth.guard';
import { HomeComponent } from './../home/home.component';
import { QuizTestComponent } from './../quiz-test/quiz-test.component';
import { RegisterComponent } from './../register/register.component';
import { Routes } from "@angular/router";





export const appRoutes: Routes = [

    {path: 'register', component: RegisterComponent},
    {path: 'quiz-test', component: QuizTestComponent, canActivate: [AuthGuard]},
    {path: 'home', component: HomeComponent,},
    {path: 'login', component: LoginComponent},
    
    {path: '', redirectTo: '/register', pathMatch: 'full'}

]