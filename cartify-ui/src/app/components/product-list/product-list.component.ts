import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  currentCategoryId: number;

  constructor(private productService: ProductService, private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getAllProducts();
    });
  }

  getAllProducts() {

    //check if "id" parameter is available
    const hascategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if(hascategoryId){
      // get the "id" parameter and converting to number using "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
    } else{
      // if no category id available, default set to 1
      this.currentCategoryId = 1;
    }

    this.productService.getProductsByCategory(this.currentCategoryId).subscribe((data) => {
      this.products = data;
    });
  }
}
