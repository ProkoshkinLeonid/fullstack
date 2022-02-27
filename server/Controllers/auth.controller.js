const db = require('../db')
class AuthController {
    async login(req, res) {
        const {name, password} = req.body
        const isAuth = await db.query('SELECT * FROM users where name = $1 AND password = $2', [name, password])
        if (isAuth.rows[0]) {
            res.json({StatusCode: '200'})
        } else {
            res.json({StatusCode: '403'})
        }
    }
}


module.exports = new AuthController()