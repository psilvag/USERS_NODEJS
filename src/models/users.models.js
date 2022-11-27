
const db=require('../utils/database')
const {DataTypes}=require('sequelize')

const Users=db.define('users',{
    id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
    },
    first_name:{
    type:DataTypes.STRING,
    allowNull:false,
    },
    last_name:{
    type:DataTypes.STRING,
    },
    email:{
    type:DataTypes.STRING,
    allowNull:false,
    },
    password:{
    type:DataTypes.STRING,
    allowNull:false
    },
    birthday:{
    type:DataTypes.DATE,
    }
})

 module.exports=Users
