import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IProduct } from './product';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
    providedIn: 'root' //this is a root injector, others can be | "root" | "platform" | "any"
    //check product list component for how to inject the provider
})

export class ProductService {
    private productUrl = 'api/products/products.json'

    constructor(private http: HttpClient) { }
    getProducts(): Observable<IProduct[]> {
        // console.log("here")
        return this.http.get<IProduct[]>(this.productUrl)
            .pipe( //it's very important that this is on the next line
                tap((data) => console.log("All", + JSON.stringify(data))),
                catchError(this.handleError)
            );
        //all products were returned earlier
    }

    private handleError(err: HttpErrorResponse) {
        //in a real world app, we may send the server to some remote logging infrastructure
        //instead of just logging to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            //A client side or network occured. Handle it accordinly
            errorMessage = `An error occured: ${err.error.message}`
        } else {
            //The backend returned an unsuccessful response code
            //The response body may contain clues as to what went wrong
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}