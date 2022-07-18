package com.swarna.cartify.repo;

import com.swarna.cartify.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepo  extends JpaRepository<Product, Long>{

}
