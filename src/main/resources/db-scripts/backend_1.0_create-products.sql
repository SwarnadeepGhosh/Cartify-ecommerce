-- Schema cartify_ecommerce
DROP SCHEMA IF EXISTS `cartify_ecommerce`;
CREATE SCHEMA cartify_ecommerce;
USE `cartify_ecommerce` ;

-- -----------------------------------------------------
-- Table `cartify_ecommerce`.`product_category`
-- -----------------------------------------------------
--CREATE TABLE [IF NOT EXISTS] `cartify_ecommerce`.`product_category` (
--  `id` BIGINT(20) not null AUTO_INCREMENT,
--  `category_name` VARCHAR(255) null default null,
--  primary key (`id`)
--)
--ENGINE = InnoDB
--AUTO_INCREMENT = 1;

-- postgres
CREATE table if not EXISTS  "cartify_ecommerce"."product_category" (
  id bigserial NOT NULL,
  category_name VARCHAR(255) null default null,
  CONSTRAINT "product_category_pk" PRIMARY KEY (id ASC)
);

-- -----------------------------------------------------
-- Table `cartify_ecommerce`.`product`
-- -----------------------------------------------------
--CREATE TABLE IF NOT EXISTS `cartify_ecommerce`.`product` (
--  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
--  `sku` VARCHAR(255) DEFAULT NULL,
--  `name` VARCHAR(255) DEFAULT NULL,
--  `description` VARCHAR(255) DEFAULT NULL,
--  `unit_price` DECIMAL(13,2) DEFAULT NULL,
--  `image_url` VARCHAR(255) DEFAULT NULL,
--  `active` BIT DEFAULT 1,
--  `units_in_stock` INT(11) DEFAULT NULL,
--   `date_created` DATETIME(6) DEFAULT NULL,
--  `last_updated` DATETIME(6) DEFAULT NULL,
--  `category_id` BIGINT(20) NOT NULL,
--  PRIMARY KEY (`id`),
--  KEY `fk_category` (`category_id`),
--  CONSTRAINT `fk_category` FOREIGN KEY (`category_id`) REFERENCES `product_category` (`id`)
--) 
--ENGINE=InnoDB
--AUTO_INCREMENT = 1;

-- postgres
CREATE TABLE IF NOT EXISTS "cartify_ecommerce".product (
  id bigserial PRIMARY KEY,
  sku VARCHAR(255) DEFAULT NULL,
  name VARCHAR(255) DEFAULT NULL,
  description VARCHAR(255) DEFAULT NULL,
  unit_price DECIMAL(13,2) DEFAULT NULL,
  image_url VARCHAR(255) DEFAULT NULL,
  active BIT DEFAULT '1' ,
  units_in_stock INT DEFAULT NULL,
   date_created TIMESTAMP DEFAULT NULL,
  last_updated TIMESTAMP DEFAULT NULL,
  category_id BIGINT NOT NULL,
--  PRIMARY KEY (id),
--  KEY fk_category (category_id),
  CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES "cartify_ecommerce".product_category (id)
) ;


-- -----------------------------------------------------
-- Add sample data
-- -----------------------------------------------------
select * from cartify_ecommerce.product_category pc ;
select * from cartify_ecommerce.product p ;


INSERT INTO cartify_ecommerce.product_category(id, category_name) VALUES (nextval('cartify_ecommerce.pc_seq'), 'BOOKS');

INSERT INTO "cartify_ecommerce".product (id, sku, name, description, image_url, active, units_in_stock, unit_price, category_id, date_created) VALUES (nextval('cartify_ecommerce.product_seq'), 'BOOK-TECH-1000', 'JavaScript - The Fun Parts', 'Learn JavaScript',
'assets/images/products/placeholder.png' ,'1',100,19.99,1, NOW());

INSERT INTO "cartify_ecommerce".product (id, sku, name, description, image_url, active, units_in_stock, unit_price, category_id, date_created)
VALUES (nextval('cartify_ecommerce.product_seq'), 'BOOK-TECH-1001', 'Spring Framework Tutorial', 'Learn Spring',
'assets/images/products/placeholder.png' ,'1',100,29.99,1, NOW());

INSERT INTO "cartify_ecommerce".product (id, sku, name, description, image_url, active, units_in_stock, unit_price, category_id, date_created)
VALUES (nextval('cartify_ecommerce.product_seq'), 'BOOK-TECH-1002', 'Kubernetes - Deploying Containers', 'Learn Kubernetes',
'assets/images/products/placeholder.png' ,'1',100,24.99,1, NOW());

INSERT INTO "cartify_ecommerce".product (id, sku, name, description, image_url, active, units_in_stock, unit_price, category_id, date_created)
VALUES (nextval('cartify_ecommerce.product_seq'), 'BOOK-TECH-1003', 'Internet of Things (IoT) - Getting Started', 'Learn IoT',
'assets/images/products/placeholder.png' ,'1',100,29.99,1, NOW());

INSERT INTO "cartify_ecommerce".product (id, sku, name, description, image_url, active, units_in_stock, unit_price, category_id, date_created)
VALUES (nextval('cartify_ecommerce.product_seq'), 'BOOK-TECH-1004', 'The Go Programming Language: A to Z', 'Learn Go',
'assets/images/products/placeholder.png' ,'1',100,24.99,1, NOW());

