
const express = require('express')
const port = 9000
const app = express()

//Require config database and routes
const db=require('./utils/database')
const usersRoutes=require('./users/users.routes')

//Check routes
app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
}) 

app.use(express.json())

//Routes
app.use('/api/v1',usersRoutes)


//Authentications
db.authenticate()
.then(()=>console.log('Correct Authentication!'))
.catch(err=>console.log(err))

db.sync()
.then(()=>console.log('Correct connection to DataBase!'))
.catch((error)=>console.log(error))


//Listen port
app.listen(port,() => {
    console.log(`Server started at port ${port}`)
})
