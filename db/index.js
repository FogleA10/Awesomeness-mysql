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

    }
}
module.exports = new DB(connection)
