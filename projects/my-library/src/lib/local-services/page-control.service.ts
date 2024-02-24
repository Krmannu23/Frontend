import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageControlService {
  public isNextEanbled:boolean;
  public isSaveApplicable:boolean;

  constructor() { }

  nextNav(navData:any){
  console.log("isNext",navData.isNextDisable)
  }
  backNav(navData:any){
    console.log('isBack',navData.isBackDisable)
  }
  saveDetails(){
    console.log('Details')
  }
  exit()
  {
    console.log('Exit')
  }
}
