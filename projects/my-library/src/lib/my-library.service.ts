import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Configuration } from './Class/configurations';

@Injectable({
  providedIn: 'root'
})
export class MyLibraryService {

  public configuration = new Configuration()
  constructor(public http:HttpClient) { }
 /**  
  * @param refList 

 */
  public getPageData(refListValue:Array<string>): Observable<any> {//we cannot use resolver with POST method

    let params= new HttpParams();
    const headers=new HttpHeaders()
    const path ='http://localhost:3000/quote';
    if(refListValue){
      refListValue.forEach((element)=>{
        params=params.append('refListValue',element as any)
      })
    }
    
    let requestOptions={
      headers,
      params,
      withCredentials:this.configuration.withCredentials
    }

    return this.http.get(path,requestOptions);
  }
}
