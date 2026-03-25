import UserRepository from "../repository/UserRepository.js"
import TokenService from "./TokenService.js"
import bcrypt from "bcrypt"
class UserService {
    async create(data){
        const hash = await bcrypt.hash(data.password, 11)
        const newData = {
            ...data,
            password: hash
        }
        await UserRepository.create(newData)
        return {
            success: true,
            message: "Usuário cadastrado com sucesso"
        }
    }
    async login(data){
        const user = await UserRepository.listId(data.id)
        
        if(!user){
            return {
                success: false,
                message: "Usuário não encontrado"
            }
        }
        const validPassoword = await bcrypt.compare(data.password, user.password)
        if(!validPassoword){
            return {
                success: false,
                message: "Credenciais inválidas"
            }
        }
        const token = await TokenService.generateToken(user)
        return {
            success: true,
            token: token
        }
    }
    async list(){
        const users = await UserRepository.list()
        return {
            success: true,
            data: users
        }
    }    
    async listId(id){
        const user = await UserRepository.listId(id)
        if(!user){
            return {
                success: false,
                message: "Usuário não encontrado"
            }
        }
        return {
            success: true,
            data: user
        }
    }
    async update(id, data){
        const user = await UserRepository.listId(id)
        if(!user){
            return{
                success: false,
                message: "Credencias invalidas"
            }
        }
        await UserRepository.toUpdate(id, data)
        return{
            success: true,
            message: "Usuário atualizado com sucesso"
        }

    }
    async delete(id){
        const user = await UserRepository.listId(id)
        if(!user){
            return{
                success: false,
                message: "Usuário não encontrado"
            }
        }
        await UserRepository.delete(id)
        return{
            success: true,
            message: "Usuário deletado com sucesso"
        }
        
    }
}
export default new UserService()