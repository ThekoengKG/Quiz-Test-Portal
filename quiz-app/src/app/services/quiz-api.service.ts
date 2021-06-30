
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class quizApiService{



    constructor(private _httpClient: HttpClient){}


    getQuizTest(): Observable<any> {
        return this._httpClient.get("http://localhost:3000/quiz-questions");

    }



}
