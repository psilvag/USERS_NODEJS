

const {Sequelize}=require('sequelize')

const dotenv=require('dotenv')
dotenv.config({path:'.env'})

const db= new Sequelize({
   dialect:process.env.BD_ACQ,
   host:process.env.BD_HOST,
   database:process.env.BD_DBASE,
   username:process.env.BD_UNAME,
   password:process.env.BD_PASS,
   port:process.env.BD_PORT

})


module.exports=db