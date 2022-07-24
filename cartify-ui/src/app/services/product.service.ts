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

  // Method is used by below multiple service methods to extract response
  private getProductResponse(searchUrl: string): Observable<Product[]> {
    return this.http
      .get<GetResponseProducts>(searchUrl)
      .pipe(map((response) => response._embedded.products));
  }

  // Spring REST gives 20 records by default , wheather there is any number of records or not
  // We need to use ${environment.apiServerUrl}/products?size=100  to get all products

  public getAllProducts(): Observable<Product[]> {
    const url = `${environment.apiServerUrl}/products`;
    return this.getProductResponse(url);
  }

  public getProductsByCategory(currentCategoryId: number): Observable<Product[]> {
    const url = `${environment.apiServerUrl}/products/search/findByCategoryId/?id=${currentCategoryId}`;
    return this.getProductResponse(url);
  }

  searchProducts(keyword: string): Observable<Product[]> {
    const searchUrl = `${environment.apiServerUrl}/products/search/findByNameContainingIgnoreCase?name=${keyword}`;
    return this.getProductResponse(searchUrl);
  }

  getProduct(theProductId: number): Observable<Product> {
    const productUrl = `${environment.apiServerUrl}/products/${theProductId}`;
    return this.http.get<Product>(productUrl);
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.http
      .get<GetResponseProductCategory>(
        `${environment.apiServerUrl}/product-category`
      )
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
