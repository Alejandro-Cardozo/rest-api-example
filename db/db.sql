CREATE DATABASE IF NOT exists mycompany;

USE mycompany;

create table employees (
	id int(11) Not null auto_increment,
    name varchar(45) default null,
    salary int(11) default null,
    primary key(id)
);

describe employees;