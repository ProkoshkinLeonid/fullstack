const db = require('../db')
class UserController {
    async createUser(req, res) {
        const {name, password} = req.body
        const newPerson = await db.query('INSERT INTO users (name, password) values ($1, $2) RETURNING *', [name, password])
        res.json({'StatusCode': 200, newPerson: newPerson.rows[0]})
    }
    async getUsers(req, res) {

    }
    async getOneUser(req, res) {

    }
    async updateUser(req, res) {

    }
    async deleteUser(req, res) {

    }
}


module.exports = new UserController()