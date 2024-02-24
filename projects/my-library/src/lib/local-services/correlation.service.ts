import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class CorrelationService {

  constructor() { }
  public corelationID:string;

  generateCorrelationID(){
    this.corelationID =uuidv4()
    return this.corelationID;
  }
}
