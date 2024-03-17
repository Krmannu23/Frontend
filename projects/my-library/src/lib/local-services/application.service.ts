import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebStudentApi } from '../Api/StudentApi';
@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(public studentApi:WebStudentApi) { }
   

}
