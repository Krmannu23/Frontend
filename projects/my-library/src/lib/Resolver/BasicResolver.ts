

import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import { Observable, catchError, throwError } from "rxjs";
import { MyLibraryService } from "../my-library.service";



@Injectable({
    providedIn: 'root',
})

export class BasicResolver implements Resolve<any> {
    constructor(public app:MyLibraryService) {}

    resolve(route: ActivatedRouteSnapshot):Observable<any> {
        const refList=route.data['refList'];
        return this.app.getPageData(refList).pipe(catchError((err:any)=>{
            return throwError(err)
        }))
    }
}
//resolver=>activate route =>component :flow of data when we mock 

//restApi=>service=>resolver=>activate route =>component:realtime flow of data
