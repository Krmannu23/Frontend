import { Injectable, Optional } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Configuration } from "../Class/configurations";
@Injectable()
export class WebStudentApi {

    protected basePath ='';
    protected defaultHeaders:Headers=new Headers()
    public configuration:Configuration = new Configuration();

    constructor(protected http:HttpClient,@Optional() configuration:Configuration) {
        if(environment){
            this.basePath=environment.PATH
        }
        else{
            throw Error('Service Base URL is not Configured')
        }
        if(configuration)
        {
            this.configuration=configuration;
        }
     }


     // Basic Details Page//
    
     //DELETE
     /**
      * Declare the parameter required for constructing URL DELETE request in  BasicDetails Component  i.e 
      * @param reference_number #we will use this for Making Delete Request URL
      * @param pageService
   
      */
     public deleteBasicDetails(reference_number:string,pageService:string):Observable<any>
     {
        return this.deleteBasicDetailsWithHttpInfo(reference_number,pageService)
     }

     public deleteBasicDetailsWithHttpInfo(reference_number:string,pageService:string,extraHttpRequestParams?:any):Observable<any>{
      
        const path = this.basePath+'/application/user/details/${pageService}/${reference_number}'
        .replace('${'+'reference_number'+'}',String((reference_number)))
        .replace('${'+'pageService'+'}',String((pageService)))
        

        const params =new HttpParams();
        let headers = new HttpHeaders();

        // verify required reference_number is not null or undefined

        if(reference_number===null ||reference_number===undefined){
            throw new Error('Required reference_number is null or undefined when calling deleteBasicDetails');
        }

          // verify required pageService is not null or undefined

          if(pageService===null ||pageService===undefined){
            throw new Error('Required pageService is null or undefined when calling deleteBasicDetails ');
        }
        
        
        headers =headers.append('Content-Type','application/json')

        let requestOptions = {
            headers,
            params,
          
        };

        if(extraHttpRequestParams){
            requestOptions=(Object as any).assign(requestOptions,extraHttpRequestParams)
        }
        const RequestMethods ={Get:'GET',Post:'POST',Put:'PUT',Delete:'DELETE'};//js object

        return this.http.request(RequestMethods.Delete,path,requestOptions)
     }

     //POST request
     /**
      * @param requestBody
      * @param pageService
      */

     public saveBasicDetails(reference_number:string,pageService:string):Observable<any>
     {
        return this.saveBasicDetailsWithHttpInfo(reference_number ,pageService)
     }

     public saveBasicDetailsWithHttpInfo(requestBody:string,pageService:string,extraHttpRequestParams?:any):Observable<any>{
      
        const path = this.basePath+'/application/user/details/${pageService}'
        .replace('${'+'pageService'+'}',String((pageService)))
        

        const params =new HttpParams();
        let headers = new HttpHeaders();

        // verify required requestBody  is not null or undefined

        if(requestBody===null ||requestBody===undefined){
            throw new Error('Required reference_number is null or undefined when calling saveBasicDetails');
        }
        
              // verify required pageService is not null or undefined

              if(pageService===null ||pageService===undefined){
                throw new Error('Required pageService is null or undefined when calling saveBasicDetails');
            }
            
            
        headers =headers.append('Content-Type','application/json')

        let requestOptions = {
            headers,
            body:requestBody==null? '':JSON.stringify(requestBody),//converting payload into json
            params,
          
        };

        if(extraHttpRequestParams){
            requestOptions=(Object as any).assign(requestOptions,extraHttpRequestParams)
        }
        const RequestMethods ={Get:'GET',Post:'POST',Put:'PUT',Delete:'DELETE'};//js object

        return this.http.request(RequestMethods.Post,path,requestOptions)
     }

     // Parent Component//
    
     //DELETE
     /**
      * Declare the parameter required for constructing URL DELETE request in  BasicDetails Component  i.e 
      * @param reference_number #we will use this for Making Delete Request URL
      * @param pageService
   
      */
     public deleteParent(reference_number:string,pageService:string):Observable<any>
     {
        return this.deleteParentWithHttpInfo(reference_number,pageService)
     }

     public deleteParentWithHttpInfo(reference_number:string,pageService:string,extraHttpRequestParams?:any):Observable<any>{
      
        const path = this.basePath+'/application/user/details/${pageService}/${reference_number}'
        .replace('${'+'reference_number'+'}',String((reference_number)))
        .replace('${'+'pageService'+'}',String((pageService)))
        

        const params =new HttpParams();
        let headers = new HttpHeaders();

        // verify required reference_number is not null or undefined

        if(reference_number===null ||reference_number===undefined){
            throw new Error('Required reference_number is null or undefined when calling deleteBasicDetails');
        }

          // verify required pageService is not null or undefined

          if(pageService===null ||pageService===undefined){
            throw new Error('Required pageService is null or undefined when calling deleteBasicDetails ');
        }
        
        
        headers =headers.append('Content-Type','application/json')

        let requestOptions = {
            headers,
            params,
          
        };

        if(extraHttpRequestParams){
            requestOptions=(Object as any).assign(requestOptions,extraHttpRequestParams)
        }
        const RequestMethods ={Get:'GET',Post:'POST',Put:'PUT',Delete:'DELETE'};//js object

        return this.http.request(RequestMethods.Delete,path,requestOptions)
     }

     //POST request
     /**
      * @param requestBody
      * @param pageService
      */

     public saveParent(reference_number:string,pageService:string):Observable<any>
     {
        return this.saveBasicDetailsWithHttpInfo(reference_number ,pageService)
     }

     public saveParentWithHttpInfo(requestBody:string,pageService:string,extraHttpRequestParams?:any):Observable<any>{
      
        const path = this.basePath+'/application/user/details/${pageService}'
        .replace('${'+'pageService'+'}',String((pageService)))
        

        const params =new HttpParams();
        let headers = new HttpHeaders();

        // verify required requestBody  is not null or undefined

        if(requestBody===null ||requestBody===undefined){
            throw new Error('Required reference_number is null or undefined when calling saveBasicDetails');
        }
        
              // verify required pageService is not null or undefined

              if(pageService===null ||pageService===undefined){
                throw new Error('Required pageService is null or undefined when calling saveBasicDetails');
            }
            
            
        headers =headers.append('Content-Type','application/json')

        let requestOptions = {
            headers,
            body:requestBody==null? '':JSON.stringify(requestBody),//converting payload into json
            params,
          
        };

        if(extraHttpRequestParams){
            requestOptions=(Object as any).assign(requestOptions,extraHttpRequestParams)
        }
        const RequestMethods ={Get:'GET',Post:'POST',Put:'PUT',Delete:'DELETE'};//js object

        return this.http.request(RequestMethods.Post,path,requestOptions)
     }

     // Address component
     
     //DELETE
     /**
      * Declare the parameter required for constructing URL DELETE request in  BasicDetails Component  i.e 
      * @param reference_number #we will use this for Making Delete Request URL
      * @param pageService
   
      */
     public deleteAddress(reference_number:string,pageService:string):Observable<any>
     {
        return this.deleteAddressWithHttpInfo(reference_number,pageService)
     }

     public deleteAddressWithHttpInfo(reference_number:string,pageService:string,extraHttpRequestParams?:any):Observable<any>{
      
        const path = this.basePath+'/application/user/details/${pageService}/${reference_number}'
        .replace('${'+'reference_number'+'}',String((reference_number)))
        .replace('${'+'pageService'+'}',String((pageService)))
        

        const params =new HttpParams();
        let headers = new HttpHeaders();

        // verify required reference_number is not null or undefined

        if(reference_number===null ||reference_number===undefined){
            throw new Error('Required reference_number is null or undefined when calling deleteBasicDetails');
        }

          // verify required pageService is not null or undefined

          if(pageService===null ||pageService===undefined){
            throw new Error('Required pageService is null or undefined when calling deleteBasicDetails ');
        }
        
        
        headers =headers.append('Content-Type','application/json')

        let requestOptions = {
            headers,
            params,
          
        };

        if(extraHttpRequestParams){
            requestOptions=(Object as any).assign(requestOptions,extraHttpRequestParams)
        }
        const RequestMethods ={Get:'GET',Post:'POST',Put:'PUT',Delete:'DELETE'};//js object

        return this.http.request(RequestMethods.Delete,path,requestOptions)
     }

     //POST request
     /**
      * @param requestBody
      * @param pageService
      */

     public saveAddress(reference_number:string,pageService:string):Observable<any>
     {
        return this.saveBasicDetailsWithHttpInfo(reference_number ,pageService)
     }

     public saveAddressWithHttpInfo(requestBody:string,pageService:string,extraHttpRequestParams?:any):Observable<any>{
      
        const path = this.basePath+'/application/user/details/${pageService}'
        .replace('${'+'pageService'+'}',String((pageService)))
        

        const params =new HttpParams();
        let headers = new HttpHeaders();

        // verify required requestBody  is not null or undefined

        if(requestBody===null ||requestBody===undefined){
            throw new Error('Required reference_number is null or undefined when calling saveBasicDetails');
        }
        
              // verify required pageService is not null or undefined

              if(pageService===null ||pageService===undefined){
                throw new Error('Required pageService is null or undefined when calling saveBasicDetails');
            }
            
            
        headers =headers.append('Content-Type','application/json')

        let requestOptions = {
            headers,
            body:requestBody==null? '':JSON.stringify(requestBody),//converting payload into json
            params,
          
        };

        if(extraHttpRequestParams){
            requestOptions=(Object as any).assign(requestOptions,extraHttpRequestParams)
        }
        const RequestMethods ={Get:'GET',Post:'POST',Put:'PUT',Delete:'DELETE'};//js object

        return this.http.request(RequestMethods.Post,path,requestOptions)
     }

     // AdditionalDetails component
     
     //DELETE
     /**
      * Declare the parameter required for constructing URL DELETE request in  BasicDetails Component  i.e 
      * @param reference_number #we will use this for Making Delete Request URL
      * @param pageService
   
      */
     public deleteAdditionalDetails(reference_number:string,pageService:string):Observable<any>
     {
        return this.deleteAdditionalDetailsWithHttpInfo(reference_number,pageService)
     }

     public deleteAdditionalDetailsWithHttpInfo(reference_number:string,pageService:string,extraHttpRequestParams?:any):Observable<any>{
      
        const path = this.basePath+'/application/user/details/${pageService}/${reference_number}'
        .replace('${'+'reference_number'+'}',String((reference_number)))
        .replace('${'+'pageService'+'}',String((pageService)))
        

        const params =new HttpParams();
        let headers = new HttpHeaders();

        // verify required reference_number is not null or undefined

        if(reference_number===null ||reference_number===undefined){
            throw new Error('Required reference_number is null or undefined when calling deleteBasicDetails');
        }

          // verify required pageService is not null or undefined

          if(pageService===null ||pageService===undefined){
            throw new Error('Required pageService is null or undefined when calling deleteBasicDetails ');
        }
        
        
        headers =headers.append('Content-Type','application/json')

        let requestOptions = {
            headers,
            params,
          
        };

        if(extraHttpRequestParams){
            requestOptions=(Object as any).assign(requestOptions,extraHttpRequestParams)
        }
        const RequestMethods ={Get:'GET',Post:'POST',Put:'PUT',Delete:'DELETE'};//js object

        return this.http.request(RequestMethods.Delete,path,requestOptions)
     }

     //POST request
     /**
      * @param requestBody
      * @param pageService
      */

     public saveAdditionalDetails(reference_number:string,pageService:string):Observable<any>
     {
        return this.saveAdditionalDetailsWithHttpInfo(reference_number ,pageService)
     }

     public saveAdditionalDetailsWithHttpInfo(requestBody:string,pageService:string,extraHttpRequestParams?:any):Observable<any>{
      
        const path = this.basePath+'/application/user/details/${pageService}'
        .replace('${'+'pageService'+'}',String((pageService)))
        

        const params =new HttpParams();
        let headers = new HttpHeaders();

        // verify required requestBody  is not null or undefined

        if(requestBody===null ||requestBody===undefined){
            throw new Error('Required reference_number is null or undefined when calling saveBasicDetails');
        }
        
              // verify required pageService is not null or undefined

              if(pageService===null ||pageService===undefined){
                throw new Error('Required pageService is null or undefined when calling saveBasicDetails');
            }
            
            
        headers =headers.append('Content-Type','application/json')

        let requestOptions = {
            headers,
            body:requestBody==null? '':JSON.stringify(requestBody),//converting payload into json
            params,
          
        };

        if(extraHttpRequestParams){
            requestOptions=(Object as any).assign(requestOptions,extraHttpRequestParams)
        }
        const RequestMethods ={Get:'GET',Post:'POST',Put:'PUT',Delete:'DELETE'};//js object

        return this.http.request(RequestMethods.Post,path,requestOptions)
     }


     // Tenschooling component
     
     //DELETE
     /**
      * Declare the parameter required for constructing URL DELETE request in  BasicDetails Component  i.e 
      * @param reference_number #we will use this for Making Delete Request URL
      * @param pageService
   
      */
     public deleteTenSchooling(reference_number:string,pageService:string):Observable<any>
     {
        return this.deleteTenSchoolingWithHttpInfo(reference_number,pageService)
     }

     public deleteTenSchoolingWithHttpInfo(reference_number:string,pageService:string,extraHttpRequestParams?:any):Observable<any>{
      
        const path = this.basePath+'/application/user/details/${pageService}/${reference_number}'
        .replace('${'+'reference_number'+'}',String((reference_number)))
        .replace('${'+'pageService'+'}',String((pageService)))
        

        const params =new HttpParams();
        let headers = new HttpHeaders();

        // verify required reference_number is not null or undefined

        if(reference_number===null ||reference_number===undefined){
            throw new Error('Required reference_number is null or undefined when calling deleteBasicDetails');
        }

          // verify required pageService is not null or undefined

          if(pageService===null ||pageService===undefined){
            throw new Error('Required pageService is null or undefined when calling deleteBasicDetails ');
        }
        
        
        headers =headers.append('Content-Type','application/json')

        let requestOptions = {
            headers,
            params,
          
        };

        if(extraHttpRequestParams){
            requestOptions=(Object as any).assign(requestOptions,extraHttpRequestParams)
        }
        const RequestMethods ={Get:'GET',Post:'POST',Put:'PUT',Delete:'DELETE'};//js object

        return this.http.request(RequestMethods.Delete,path,requestOptions)
     }

     //POST request
     /**
      * @param requestBody
      * @param pageService
      */

     public saveTenSchooling(reference_number:string,pageService:string):Observable<any>
     {
        return this.saveAdditionalDetailsWithHttpInfo(reference_number ,pageService)
     }

     public saveTenSchoolingWithHttpInfo(requestBody:string,pageService:string,extraHttpRequestParams?:any):Observable<any>{
      
        const path = this.basePath+'/application/user/details/${pageService}'
        .replace('${'+'pageService'+'}',String((pageService)))
        

        const params =new HttpParams();
        let headers = new HttpHeaders();

        // verify required requestBody  is not null or undefined

        if(requestBody===null ||requestBody===undefined){
            throw new Error('Required reference_number is null or undefined when calling saveBasicDetails');
        }
        
              // verify required pageService is not null or undefined

              if(pageService===null ||pageService===undefined){
                throw new Error('Required pageService is null or undefined when calling saveBasicDetails');
            }
            
            
        headers =headers.append('Content-Type','application/json')

        let requestOptions = {
            headers,
            body:requestBody==null? '':JSON.stringify(requestBody),//converting payload into json
            params,
          
        };

        if(extraHttpRequestParams){
            requestOptions=(Object as any).assign(requestOptions,extraHttpRequestParams)
        }
        const RequestMethods ={Get:'GET',Post:'POST',Put:'PUT',Delete:'DELETE'};//js object

        return this.http.request(RequestMethods.Post,path,requestOptions)
     }

     
     //Twelveschooling component
     
     //DELETE
     /**
      * Declare the parameter required for constructing URL DELETE request in  BasicDetails Component  i.e 
      * @param reference_number #we will use this for Making Delete Request URL
      * @param pageService
   
      */
     public deleteTwelveSchooling(reference_number:string,pageService:string):Observable<any>
     {
        return this.deleteTwelveSchoolingWithHttpInfo(reference_number,pageService)
     }

     public deleteTwelveSchoolingWithHttpInfo(reference_number:string,pageService:string,extraHttpRequestParams?:any):Observable<any>{
      
        const path = this.basePath+'/application/user/details/${pageService}/${reference_number}'
        .replace('${'+'reference_number'+'}',String((reference_number)))
        .replace('${'+'pageService'+'}',String((pageService)))
        

        const params =new HttpParams();
        let headers = new HttpHeaders();

        // verify required reference_number is not null or undefined

        if(reference_number===null ||reference_number===undefined){
            throw new Error('Required reference_number is null or undefined when calling deleteBasicDetails');
        }

          // verify required pageService is not null or undefined

          if(pageService===null ||pageService===undefined){
            throw new Error('Required pageService is null or undefined when calling deleteBasicDetails ');
        }
        
        
        headers =headers.append('Content-Type','application/json')

        let requestOptions = {
            headers,
            params,
          
        };

        if(extraHttpRequestParams){
            requestOptions=(Object as any).assign(requestOptions,extraHttpRequestParams)
        }
        const RequestMethods ={Get:'GET',Post:'POST',Put:'PUT',Delete:'DELETE'};//js object

        return this.http.request(RequestMethods.Delete,path,requestOptions)
     }

     //POST request
     /**
      * @param requestBody
      * @param pageService
      */

     public saveTwelveSchooling(reference_number:string,pageService:string):Observable<any>
     {
        return this.saveTwelveWithHttpInfo(reference_number ,pageService)
     }

     public saveTwelveWithHttpInfo(requestBody:string,pageService:string,extraHttpRequestParams?:any):Observable<any>{
      
        const path = this.basePath+'/application/user/details/${pageService}'
        .replace('${'+'pageService'+'}',String((pageService)))
        

        const params =new HttpParams();
        let headers = new HttpHeaders();

        // verify required requestBody  is not null or undefined

        if(requestBody===null ||requestBody===undefined){
            throw new Error('Required reference_number is null or undefined when calling saveBasicDetails');
        }
        
              // verify required pageService is not null or undefined

              if(pageService===null ||pageService===undefined){
                throw new Error('Required pageService is null or undefined when calling saveBasicDetails');
            }
            
            
        headers =headers.append('Content-Type','application/json')

        let requestOptions = {
            headers,
            body:requestBody==null? '':JSON.stringify(requestBody),//converting payload into json
            params,
          
        };

        if(extraHttpRequestParams){
            requestOptions=(Object as any).assign(requestOptions,extraHttpRequestParams)
        }
        const RequestMethods ={Get:'GET',Post:'POST',Put:'PUT',Delete:'DELETE'};//js object

        return this.http.request(RequestMethods.Post,path,requestOptions)
     }

     //collegeDetails component
     
     //DELETE
     /**
      * Declare the parameter required for constructing URL DELETE request in  BasicDetails Component  i.e 
      * @param reference_number #we will use this for Making Delete Request URL
      * @param pageService
   
      */
     public deletecollegeDetails(reference_number:string,pageService:string):Observable<any>
     {
        return this.deletecollegeDetailsWithHttpInfo(reference_number,pageService)
     }

     public deletecollegeDetailsWithHttpInfo(reference_number:string,pageService:string,extraHttpRequestParams?:any):Observable<any>{
      
        const path = this.basePath+'/application/user/details/${pageService}/${reference_number}'
        .replace('${'+'reference_number'+'}',String((reference_number)))
        .replace('${'+'pageService'+'}',String((pageService)))
        

        const params =new HttpParams();
        let headers = new HttpHeaders();

        // verify required reference_number is not null or undefined

        if(reference_number===null ||reference_number===undefined){
            throw new Error('Required reference_number is null or undefined when calling deleteBasicDetails');
        }

          // verify required pageService is not null or undefined

          if(pageService===null ||pageService===undefined){
            throw new Error('Required pageService is null or undefined when calling deleteBasicDetails ');
        }
        
        
        headers =headers.append('Content-Type','application/json')

        let requestOptions = {
            headers,
            params,
          
        };

        if(extraHttpRequestParams){
            requestOptions=(Object as any).assign(requestOptions,extraHttpRequestParams)
        }
        const RequestMethods ={Get:'GET',Post:'POST',Put:'PUT',Delete:'DELETE'};//js object

        return this.http.request(RequestMethods.Delete,path,requestOptions)
     }

     //POST request
     /**
      * @param requestBody
      * @param pageService
      */

     public savecollegeDetails(reference_number:string,pageService:string):Observable<any>
     {
        return this.saveTwelveWithHttpInfo(reference_number ,pageService)
     }

     public savecollegeDetailseWithHttpInfo(requestBody:string,pageService:string,extraHttpRequestParams?:any):Observable<any>{
      
        const path = this.basePath+'/application/user/details/${pageService}'
        .replace('${'+'pageService'+'}',String((pageService)))
        

        const params =new HttpParams();
        let headers = new HttpHeaders();

        // verify required requestBody  is not null or undefined

        if(requestBody===null ||requestBody===undefined){
            throw new Error('Required reference_number is null or undefined when calling saveBasicDetails');
        }
        
              // verify required pageService is not null or undefined

              if(pageService===null ||pageService===undefined){
                throw new Error('Required pageService is null or undefined when calling saveBasicDetails');
            }
            
            
        headers =headers.append('Content-Type','application/json')

        let requestOptions = {
            headers,
            body:requestBody==null? '':JSON.stringify(requestBody),//converting payload into json
            params,
          
        };

        if(extraHttpRequestParams){
            requestOptions=(Object as any).assign(requestOptions,extraHttpRequestParams)
        }
        const RequestMethods ={Get:'GET',Post:'POST',Put:'PUT',Delete:'DELETE'};//js object

        return this.http.request(RequestMethods.Post,path,requestOptions)
     }

     //Tenth component
     
     //DELETE
     /**
      * Declare the parameter required for constructing URL DELETE request in  BasicDetails Component  i.e 
      * @param reference_number #we will use this for Making Delete Request URL
      * @param pageService
   
      */
     public deleteTenth(reference_number:string,pageService:string):Observable<any>
     {
        return this.deleteTenthWithHttpInfo(reference_number,pageService)
     }

     public deleteTenthWithHttpInfo(reference_number:string,pageService:string,extraHttpRequestParams?:any):Observable<any>{
      
        const path = this.basePath+'/application/user/details/${pageService}/${reference_number}'
        .replace('${'+'reference_number'+'}',String((reference_number)))
        .replace('${'+'pageService'+'}',String((pageService)))
        

        const params =new HttpParams();
        let headers = new HttpHeaders();

        // verify required reference_number is not null or undefined

        if(reference_number===null ||reference_number===undefined){
            throw new Error('Required reference_number is null or undefined when calling deleteBasicDetails');
        }

          // verify required pageService is not null or undefined

          if(pageService===null ||pageService===undefined){
            throw new Error('Required pageService is null or undefined when calling deleteBasicDetails ');
        }
        
        
        headers =headers.append('Content-Type','application/json')

        let requestOptions = {
            headers,
            params,
          
        };

        if(extraHttpRequestParams){
            requestOptions=(Object as any).assign(requestOptions,extraHttpRequestParams)
        }
        const RequestMethods ={Get:'GET',Post:'POST',Put:'PUT',Delete:'DELETE'};//js object

        return this.http.request(RequestMethods.Delete,path,requestOptions)
     }

     //POST request
     /**
      * @param requestBody
      * @param pageService
      */

     public saveTenth(reference_number:string,pageService:string):Observable<any>
     {
        return this.saveTenthWithHttpInfo(reference_number ,pageService)
     }

     public saveTenthWithHttpInfo(requestBody:string,pageService:string,extraHttpRequestParams?:any):Observable<any>{
      
        const path = this.basePath+'/application/user/details/${pageService}'
        .replace('${'+'pageService'+'}',String((pageService)))
        

        const params =new HttpParams();
        let headers = new HttpHeaders();

        // verify required requestBody  is not null or undefined

        if(requestBody===null ||requestBody===undefined){
            throw new Error('Required reference_number is null or undefined when calling saveBasicDetails');
        }
        
              // verify required pageService is not null or undefined

              if(pageService===null ||pageService===undefined){
                throw new Error('Required pageService is null or undefined when calling saveBasicDetails');
            }
            
            
        headers =headers.append('Content-Type','application/json')

        let requestOptions = {
            headers,
            body:requestBody==null? '':JSON.stringify(requestBody),//converting payload into json
            params,
          
        };

        if(extraHttpRequestParams){
            requestOptions=(Object as any).assign(requestOptions,extraHttpRequestParams)
        }
        const RequestMethods ={Get:'GET',Post:'POST',Put:'PUT',Delete:'DELETE'};//js object

        return this.http.request(RequestMethods.Post,path,requestOptions)
     }

     //Twelveth component
     
     //DELETE
     /**
      * Declare the parameter required for constructing URL DELETE request in  BasicDetails Component  i.e 
      * @param reference_number #we will use this for Making Delete Request URL
      * @param pageService
   
      */
     public deleteTwelveth(reference_number:string,pageService:string):Observable<any>
     {
        return this.deleteTenthWithHttpInfo(reference_number,pageService)
     }

     public deleteTwelvethWithHttpInfo(reference_number:string,pageService:string,extraHttpRequestParams?:any):Observable<any>{
      
        const path = this.basePath+'/application/user/details/${pageService}/${reference_number}'
        .replace('${'+'reference_number'+'}',String((reference_number)))
        .replace('${'+'pageService'+'}',String((pageService)))
        

        const params =new HttpParams();
        let headers = new HttpHeaders();

        // verify required reference_number is not null or undefined

        if(reference_number===null ||reference_number===undefined){
            throw new Error('Required reference_number is null or undefined when calling deleteBasicDetails');
        }

          // verify required pageService is not null or undefined

          if(pageService===null ||pageService===undefined){
            throw new Error('Required pageService is null or undefined when calling deleteBasicDetails ');
        }
        
        
        headers =headers.append('Content-Type','application/json')

        let requestOptions = {
            headers,
            params,
          
        };

        if(extraHttpRequestParams){
            requestOptions=(Object as any).assign(requestOptions,extraHttpRequestParams)
        }
        const RequestMethods ={Get:'GET',Post:'POST',Put:'PUT',Delete:'DELETE'};//js object

        return this.http.request(RequestMethods.Delete,path,requestOptions)
     }

     //POST request
     /**
      * @param requestBody
      * @param pageService
      */

     public saveTwelveth(reference_number:string,pageService:string):Observable<any>
     {
        return this.saveTenthWithHttpInfo(reference_number ,pageService)
     }

     public saveTwelvethWithHttpInfo(requestBody:string,pageService:string,extraHttpRequestParams?:any):Observable<any>{
      
        const path = this.basePath+'/application/user/details/${pageService}'
        .replace('${'+'pageService'+'}',String((pageService)))
        

        const params =new HttpParams();
        let headers = new HttpHeaders();

        // verify required requestBody  is not null or undefined

        if(requestBody===null ||requestBody===undefined){
            throw new Error('Required reference_number is null or undefined when calling saveBasicDetails');
        }
        
              // verify required pageService is not null or undefined

              if(pageService===null ||pageService===undefined){
                throw new Error('Required pageService is null or undefined when calling saveBasicDetails');
            }
            
            
        headers =headers.append('Content-Type','application/json')

        let requestOptions = {
            headers,
            body:requestBody==null? '':JSON.stringify(requestBody),//converting payload into json
            params,
          
        };

        if(extraHttpRequestParams){
            requestOptions=(Object as any).assign(requestOptions,extraHttpRequestParams)
        }
        const RequestMethods ={Get:'GET',Post:'POST',Put:'PUT',Delete:'DELETE'};//js object

        return this.http.request(RequestMethods.Post,path,requestOptions)
     }

     //College component
     
     //DELETE
     /**
      * Declare the parameter required for constructing URL DELETE request in  BasicDetails Component  i.e 
      * @param reference_number #we will use this for Making Delete Request URL
      * @param pageService
   
      */
     public deleteCollege(reference_number:string,pageService:string):Observable<any>
     {
        return this.deleteCollegeWithHttpInfo(reference_number,pageService)
     }

     public deleteCollegeWithHttpInfo(reference_number:string,pageService:string,extraHttpRequestParams?:any):Observable<any>{
      
        const path = this.basePath+'/application/user/details/${pageService}/${reference_number}'
        .replace('${'+'reference_number'+'}',String((reference_number)))
        .replace('${'+'pageService'+'}',String((pageService)))
        

        const params =new HttpParams();
        let headers = new HttpHeaders();

        // verify required reference_number is not null or undefined

        if(reference_number===null ||reference_number===undefined){
            throw new Error('Required reference_number is null or undefined when calling deleteBasicDetails');
        }

          // verify required pageService is not null or undefined

          if(pageService===null ||pageService===undefined){
            throw new Error('Required pageService is null or undefined when calling deleteBasicDetails ');
        }
        
        
        headers =headers.append('Content-Type','application/json')

        let requestOptions = {
            headers,
            params,
          
        };

        if(extraHttpRequestParams){
            requestOptions=(Object as any).assign(requestOptions,extraHttpRequestParams)
        }
        const RequestMethods ={Get:'GET',Post:'POST',Put:'PUT',Delete:'DELETE'};//js object

        return this.http.request(RequestMethods.Delete,path,requestOptions)
     }

     //POST request
     /**
      * @param requestBody
      * @param pageService
      */

     public saveCollege(reference_number:string,pageService:string):Observable<any>
     {
        return this.saveTenthWithHttpInfo(reference_number ,pageService)
     }

     public saveCollegeWithHttpInfo(requestBody:string,pageService:string,extraHttpRequestParams?:any):Observable<any>{
      
        const path = this.basePath+'/application/user/details/${pageService}'
        .replace('${'+'pageService'+'}',String((pageService)))
        

        const params =new HttpParams();
        let headers = new HttpHeaders();

        // verify required requestBody  is not null or undefined

        if(requestBody===null ||requestBody===undefined){
            throw new Error('Required reference_number is null or undefined when calling saveBasicDetails');
        }
        
              // verify required pageService is not null or undefined

              if(pageService===null ||pageService===undefined){
                throw new Error('Required pageService is null or undefined when calling saveBasicDetails');
            }
            
            
        headers =headers.append('Content-Type','application/json')

        let requestOptions = {
            headers,
            body:requestBody==null? '':JSON.stringify(requestBody),//converting payload into json
            params,
          
        };

        if(extraHttpRequestParams){
            requestOptions=(Object as any).assign(requestOptions,extraHttpRequestParams)
        }
        const RequestMethods ={Get:'GET',Post:'POST',Put:'PUT',Delete:'DELETE'};//js object

        return this.http.request(RequestMethods.Post,path,requestOptions)
     }

     
     //GET allResponse
     public retriveAllResponse():Observable<any>
     {
        return this.retriveAllResponseWithHttpInfo()
     }

     public retriveAllResponseWithHttpInfo(extraHttpRequestParams?:any):Observable<any>{
      
        const path = this.basePath+'/application/user/performance/allResponse'
        

        const params =new HttpParams();
        let headers = new HttpHeaders();
        
        
        headers =headers.append('Content-Type','application/json')

        let requestOptions = {
            headers,
            params,
          
        };

        if(extraHttpRequestParams){
            requestOptions=(Object as any).assign(requestOptions,extraHttpRequestParams)
        }
        const RequestMethods ={Get:'GET',Post:'POST',Put:'PUT',Delete:'DELETE'};//js object

        return this.http.request(RequestMethods.Get,path,requestOptions)
     }
  }
  