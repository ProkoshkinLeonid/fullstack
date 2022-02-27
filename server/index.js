const express = require('express')
const userRouter = require('./Routes/user.routes.js')
const authRouter = require('./Routes/auth.routes.js')

const app = express()
const PORT = 3000


app.use(express.json())
app.use('/api', [userRouter, authRouter])

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})

