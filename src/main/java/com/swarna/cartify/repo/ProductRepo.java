package com.swarna.cartify.repo;

import com.swarna.cartify.entity.Product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.RequestParam;

@RepositoryRestResource
public interface ProductRepo  extends JpaRepository<Product, Long>{

    //API will be => http://localhost:8080/api/products/search/findByCategoryId/?id=2
    Page<Product> findByCategoryId(@RequestParam("id") Long id, Pageable pageable);
}
