import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { quizApiService } from '../services/quiz-api.service';
import { QuizTest } from '../classes/quiz';


@Component({
  selector: 'app-quiz-test',
  templateUrl: './quiz-test.component.html',
  styleUrls: ['./quiz-test.component.css'],
  providers: [quizApiService]
})
export class QuizTestComponent implements OnInit {

  quizData: QuizTest[] = [];
  currentQuiz = 0;
  optionSelected = false;
  correctAnswer = 0;
  incorrectAnswer= 0;
  result= false;

  constructor(private _quizApiService: quizApiService, private _router: Router) { }

  ngOnInit(): void {

    this._quizApiService.getQuizTest().subscribe(data=>{
      
      this.quizData = data;

    });
  }


  onAnswer(option: boolean){
   
    this.optionSelected = true;

    setTimeout(() => {
      this.currentQuiz++;
      this.optionSelected = false;
    }, 1000);
    
    

    if(option){
      this.correctAnswer++;
    } else{
      this.incorrectAnswer++;
    }

  }
  
  showResults(){
    this.result=true;
  }

  signOut(){
  this._router.navigate(['/home']);    
  }

}


