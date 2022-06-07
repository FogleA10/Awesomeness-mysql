use employee_db;
INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead',100000, 1),
    ('Sales Person', 80000, 1),
    ('Lead Engineer',150000, 2),
    ('Software Engineer',120000, 2),
    ('Accountant Manager',160000, 3),
    ('Accountant',125000, 3),
    ('Legal Team Lead',250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),
    ('Jessica', 'Martin', 1, NULL),
    ('Ashley', 'Rodriguez', 2, NULL),
    ('Kevin', 'Tupik', 2, 1),
    ('Kunal', 'Singh', 3, 2),
    ('Malia', 'Brown', 3, NULL), 
    ('Sarah', 'Lourd', 4, NULL), 
    ('Tom', 'Allen', 4, NULL);


