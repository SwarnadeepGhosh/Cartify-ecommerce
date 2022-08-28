package com.swarna.cartify.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "state", schema = "cartify_ecommerce")
public class State {

	@Id
	@SequenceGenerator(name = "state_seq", sequenceName = "state_seq", allocationSize = 1, schema = "cartify_ecommerce")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "state_seq")
	@Column(name = "id")
	private int id;
	
	@Column(name = "name")
	private String name;
	
	@ManyToOne
	@JoinColumn(name = "country_id")
	private Country country;
}
