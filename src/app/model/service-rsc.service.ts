import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategories, ICategory } from '../interfaces/categories';



@Injectable({
  providedIn: 'root'
})
export class ServiceRscService {



  

  constructor(private http: HttpClient) { }


  getAllCategories(): Observable<ICategories[]>{
    return this.http.get<ICategories[]>(`${environment.apiUrl}/categories.php`);
    
  }

  getFilterByCategory(name: any): Observable<ICategories>{
    return this.http.get<ICategories>(`${environment.apiUrl}/filter.php?c=${name}`);
    
  }



  getIdMeal(id: any): Observable<ICategories>{
    return this.http.get<ICategories>(`${environment.apiUrl}/lookup.php?i=${id}`);
  
  }



  getAllCategoriesTwo(): Observable<ICategories>{
    return this.http.get<ICategories>(`${environment.apiUrl}/categories.php`);
    
  }




}
