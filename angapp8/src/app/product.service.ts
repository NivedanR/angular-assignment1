import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
    providedIn:'root'
})

export class ProductService{
    private apiURL='http://localhost:3000/posts';

    constructor(private http:HttpClient){}

    getProducts():Observable<any>{
        return this.http.get<any>(this.apiURL);
    }
}