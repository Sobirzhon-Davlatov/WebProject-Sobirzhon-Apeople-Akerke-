import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { categories } from './categories';

import { MessageService } from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
 
  constructor() { }

  getCategory(id: number): Observable<Category[]> {
    return of(categories.find(categories => categories.id === id));
  }

  getCategories(): Observable<any> {
    return of(categories);
  }
}