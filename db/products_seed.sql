create database bamazoncustomer;
use bamazoncustomer;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `department_name` varchar(255) DEFAULT NULL,
  `price` float NOT NULL,
  `stock_quantity` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `products` (`id`,`product_name`,`department_name`,`price`,`stock_quantity`) VALUES (1,'fedora','mens accessories',54.21,60);
INSERT INTO `products` (`id`,`product_name`,`department_name`,`price`,`stock_quantity`) VALUES (2,'stiletto heels','womens accessories',123.24,30);
INSERT INTO `products` (`id`,`product_name`,`department_name`,`price`,`stock_quantity`) VALUES (3,'combination wrench','hardware',5.76,23);
INSERT INTO `products` (`id`,`product_name`,`department_name`,`price`,`stock_quantity`) VALUES (4,'geiger counter','hardware',1234.54,45);
INSERT INTO `products` (`id`,`product_name`,`department_name`,`price`,`stock_quantity`) VALUES (5,'toaster','small appliances',12.45,76);
INSERT INTO `products` (`id`,`product_name`,`department_name`,`price`,`stock_quantity`) VALUES (6,'desk lamp','small appliances',45.23,12);
INSERT INTO `products` (`id`,`product_name`,`department_name`,`price`,`stock_quantity`) VALUES (7,'coffee cup','housewares',2.99,34);
INSERT INTO `products` (`id`,`product_name`,`department_name`,`price`,`stock_quantity`) VALUES (8,'turtle neck','mens clothing',45.65,91);
INSERT INTO `products` (`id`,`product_name`,`department_name`,`price`,`stock_quantity`) VALUES (9,'polo shirt','womens clothing',23.87,23);
INSERT INTO `products` (`id`,`product_name`,`department_name`,`price`,`stock_quantity`) VALUES (10,'teddy bear','toys',12.99,1);
INSERT INTO `products` (`id`,`product_name`,`department_name`,`price`,`stock_quantity`) VALUES (11,'axe','hardware',34.22,98);
