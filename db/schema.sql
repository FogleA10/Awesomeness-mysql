DROP TABLE IF EXISTS departments;

DROP TABLE IF EXISTS roles;

DROP TABLE IF EXISTS employees;


CREATE TABLE departments(
    deparmentsId: INT PRIMARY KEY
    departments_name: VARCHAR(30)

);

CREATE TABLE roles(
    rolesId: INT AUTO_INCREMENT,
    title: , 
    salary, 
    PRIMARY KEY (rolesId),
    FOREIGN KEY (deparmentsId). REFERENCES deparments(departmentsId)

);

CREATE TABLE employees(
    employeesId: INT PRIMARY KEY
    first_name :VARCHAR(30)
    last_name: VARCHAR(30)
    role_id: INT
    manager_id:INT


);