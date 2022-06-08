const connection = require("./connection");
class DB{
    constructor(connection){
        this.connection = connection
    }
    departments(){
        return this.connection.promise().query(
            "SELECT * FROM department"
        )
    }
    // 1. Write query for the prompt option (ex. See all employees)
    allEmployees() {
        return this.connection.promise().query(
            'SELECT * FROM employee'
        )

    }
    roles(){
        return this.connection.promise().query(
            "SELECT * FROM role"
        )
    }
    insertDepartment(department){
        return this.connection.promise().query(
            "INSERT INTO department (name) VALUES (?)" , department
        )
    }
    insertEmployee(){
        return this.connection.promise().query(
            "INSERT INTO role SET ? "
        )
    }
    insertRoles(allRoles){
        return this.connection.promise().query(
            "INSERT INTO role SET ? ", allRoles
        )
    }
    updateRole({ role_id, id }) {
        return this.connection.promise().query("UPDATE employee SET role_id = ? WHERE id = ?;", [role_id, id]);
      };
     delete(id) {
        return this.connection.promise().query("DELETE FROM  WHERE id = ?;", id)
      }

}
module.exports = new DB(connection);
