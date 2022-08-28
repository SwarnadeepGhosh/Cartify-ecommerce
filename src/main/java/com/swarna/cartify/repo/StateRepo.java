package com.swarna.cartify.repo;

import com.swarna.cartify.entity.State;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface StateRepo extends JpaRepository<State, Integer> {

	// API = http://localhost:8080/api/states/search/findByCountryCode?code=IN
	List<State> findByCountryCode(@Param("code") String code);
}
