package com.swarna.cartify.repo;

import com.swarna.cartify.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ProductRepo  extends JpaRepository<Product, Long>{

}
