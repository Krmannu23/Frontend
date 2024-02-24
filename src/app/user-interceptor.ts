import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor,HttpRequest} from "@angular/common/http";
import { Observable } from "rxjs";

 
@Injectable()
export class UserHttpInterceptor implements HttpInterceptor {
    constructor(){
}
 
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req);
        return next.handle(req);
    }
    //here we create header
    //here we will do caching
}
 