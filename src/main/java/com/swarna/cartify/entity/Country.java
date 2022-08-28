package com.swarna.cartify.entity;

import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "country", schema = "cartify_ecommerce")
public class Country {

	@Id
	@SequenceGenerator(name = "country_seq", sequenceName = "country_seq", allocationSize = 1, schema = "cartify_ecommerce")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "country_seq")
	@Column(name = "id")
	private int id;

	@Column(name = "code")
	private String code;

	@Column(name = "name")
	private String name;

	@OneToMany(mappedBy = "country")
	private List<State> states;
}
