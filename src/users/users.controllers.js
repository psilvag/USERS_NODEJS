const Users=require('../models/users.models')
 
const findAllUsers = async() => {
 const data= await Users.findAll()
 return data
}

const findUserById = async (id) => {
    const data= await Users.findOne({
        where:{
            id:id
        }
    })
    return data
}

const createUser = async (data) => {
    const obj= await Users.create(
        {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: data.password,
            birthday: data.birthday
        }
    )
    return obj
}

const updateUser = async(id,obj) => {
    const data= await Users.update(obj,{
        where:{
            id:id
        }
        })
    return data[0]
}

const deleteUser =  async(id) => {
    const data= await Users.destroy({
         where:{
            id:id
         }  
    })
    return data
}

module.exports={
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser
}
