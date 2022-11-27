
 
const {Sequelize}=require('sequelize')

const db= new Sequelize({
   dialect:'postgres',
   host:'localhost',
   database:'Users-db',
   username:'postgres',
   password:'rest15',
   port:5432

})


module.exports=db