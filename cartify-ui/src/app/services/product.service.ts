import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<GetResponse>(`${environment.apiServerUrl}/products`).pipe(
      map(response => response._embedded.products)
    ) ;
  }
}

interface GetResponse {
  _embedded : {
    products : Product[];
  }
}
