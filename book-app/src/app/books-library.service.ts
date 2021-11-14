import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BooksLibraryService {
  constructor( private httpClient:HttpClient) { }
   
  public GetBooksByCategory(bookname:string , bookCategory:string):Observable<Response>{
    let httpHeaders = new HttpHeaders()
    .set('Accept', 'application/json');

  // console.log(this.httpClient.get<any>('https://www.googleapis.com/books/v1/volumes' +'?q='+bookCategory +':'+bookname,{headers: httpHeaders,
  // responseType: 'json'}));
  // console.log('https://www.googleapis.com/books/v1/volumes' +'?q='+bookCategory +':'+bookname);
  
  
  return this.httpClient.get<any>('https://www.googleapis.com/books/v1/volumes' +'?q='+bookCategory +':'+bookname, {headers: httpHeaders,
  responseType: 'json'}
)
  }
}
