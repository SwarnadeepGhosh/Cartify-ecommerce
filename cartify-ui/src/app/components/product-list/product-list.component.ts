import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  currentCategoryId: number = 1;
  previousCategoryId: number = 1;
  isSearchActive: boolean;

  // new properties for pagination
  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {
    this.isSearchActive = this.route.snapshot.paramMap.has('keyword');

    if (this.isSearchActive) {
      this.handleSearchProducts();
    } else {
      this.handleListProducts();
    }
  }

  handleListProducts() {
    //check if "id" parameter is available
    const hascategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hascategoryId) {
      // get the "id" parameter and converting to number using "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
    } else {
      // if no category id available, default set to 1
      this.currentCategoryId = 1;
    }

    // Pagination Support
    // Check if we have a different category than previous
    // Note: Angular will reuse a component if it is currently being viewed
    // if we have a different category id than previous, then set thePageNumber back to 1
    if (this.previousCategoryId != this.currentCategoryId) {
      this.thePageNumber = 1;
    }
    // Track current category Id and saving this to Previous category ID
    this.previousCategoryId = this.currentCategoryId;
    console.log(
      `currentCategoryId=${this.currentCategoryId}, thePageNumber=${this.thePageNumber}`
    );

    // this.productService.getProductsByCategory(this.currentCategoryId).subscribe((data) => {
    //     this.products = data;
    //   });
    // now get the products for the given category id
    // frontend pagination starts from pageNumber = 1, for backend its 0, thatswhy substracting by 1 to send to backend
    this.productService
      .getProductsByCategoryPaginate(
        this.thePageNumber - 1,
        this.thePageSize,
        this.currentCategoryId
      )
      .subscribe(this.processResult());
  }

  processResult() {
    return (data) => {
      this.products = data._embedded.products;
      // frontend pagination starts from pageNumber = 1, for backend its 0, thatswhy adding by 1 to show in UI
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }

  handleSearchProducts() {
    const keyword: string = this.route.snapshot.paramMap.get('keyword');

    this.productService
      .searchProductsPaginate(this.thePageNumber - 1, this.thePageSize, keyword)
      .subscribe(this.processResult());
  }

  updatePageSize(event: Event) {
    this.thePageSize = parseInt((event.target as HTMLInputElement).value);
    this.thePageNumber = 1;
    this.listProducts();
  }

}
