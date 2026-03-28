import UserRepository from "../repository/UserRepository.js"
import TokenService from "./TokenService.js"
import bcrypt from "bcrypt"
import AppError from "../utils/AppError.js"
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
        const user = await UserRepository.listEmail(data.email)
        
        if(!user){
            throw new AppError("Credencias inválidas", 404)
        }
        const validPassoword = await bcrypt.compare(data.password, user.password)
        if(!validPassoword){
            throw new AppError("Credencias inválidas",400)
        }
        const token = await TokenService.generateToken(user)
        return token
    }
    async list(){
        const users = await UserRepository.list()
        return users
    }    
    async listId(id){
        const user = await UserRepository.listId(id)
        if(!user){
            throw new AppError("Usuário não encontrado", 404)
        }
        return user
    }
    async update(id, data){
        const user = await UserRepository.listId(id)
        if(!user){
            throw new AppError("Usuário não encontrado", 404)
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
            throw new AppError("Usuário não encontrado", 404)
        }
        await UserRepository.delete(id)
        return{
            success: true,
            message: "Usuário deletado com sucesso"
        }
        
    }
}
export default new UserService()