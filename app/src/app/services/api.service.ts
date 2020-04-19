import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ResultDto } from '../models/ResultDto';
import { Card } from '../models/card';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // API path
  base_path = 'https://localhost:44304/api/Card';
  get_path = 'https://localhost:44304/api/GetCard';


  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  // Create a new item
  createItem(item): Observable<ResultDto> {
    item.Id = 0;
    item.Stars = 0;
    item.CardId = 'lol';
    item.CardName = 'nathan';
    return this.http
      .post<ResultDto>(this.base_path, item, this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  // Get single CARD data by ID
  getItem(id): Observable<ResultDto> {
    return this.http
      .get<ResultDto>(this.base_path + '/' + id)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  // Get CARD data
  getList(): Observable<Card> {
    return this.http
      .get<Card>(this.base_path)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  addCard(item): Observable<ResultDto> {
    item.Stars = 0;
    item.CardId = 'lol';
    item.CardName = 'nathan';
    console.log(item);


    return this.http
      .post<ResultDto>(this.base_path, item, this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  // Update item by id
  updateItem(id, item): Observable<ResultDto> {
    item.quantidadePassageiros = parseInt(item.quantidadePassageiros);
    return this.http
      .put<ResultDto>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  // Delete item by id
  deleteItem(id) : Observable<ResultDto> {
    return this.http
      .delete<ResultDto>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

}

