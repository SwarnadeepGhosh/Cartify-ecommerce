import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  // Spring REST gives 20 records by default , wheather there is any number of records or not
  // We need to use ${environment.apiServerUrl}/products?size=100  to get all products

  public getAllProducts(): Observable<Product[]> {
    return this.http
      .get<GetResponseProducts>(`${environment.apiServerUrl}/products`)
      .pipe(map((response) => response._embedded.products));
  }

  public getProductsByCategory(
    currentCategoryId: number
  ): Observable<Product[]> {
    return this.http
      .get<GetResponseProducts>(`${environment.apiServerUrl}/products/search/findByCategoryId/?id=${currentCategoryId}`)
      .pipe(map((response) => response._embedded.products));
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.http
      .get<GetResponseProductCategory>(`${environment.apiServerUrl}/product-category`)
      .pipe(map((response) => response._embedded.productCategory));
  }
}

interface GetResponseProducts {
  _embedded: {
    products: Product[];
  };
}

interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  };
}
