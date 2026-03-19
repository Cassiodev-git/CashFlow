import UserRepository from "../repository/UserRepository.js"
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
    async login(email, password){
        const user = await UserRepository.listEmail(email)
        if(!user){
            return {
                success: false,
                message: "Credencias inválidas"
            }
        }
        const valiPassoword = await bcrypt.compare(password, user.password)
        if(valiPassoword){
            return {
                success: true,
                id: user.id,
                email: user.email
            }
        }else{
            return {
                success: false,
                message: "Credencias inválidas"
            }
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
    async findByEmail(email){
        const user = await UserRepository.listEmail(email)
        if(!user){
            return {
                success: false,
                message: "Usuário não encontrado"
            }
        }
        return{
            success: true,
            data: user
        }
    }
    async update(id, data){
        const user = await UserRepository.listId(id)
        if(!user){
            return{
                success: false,
                message: "Usuário não encontrado"
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