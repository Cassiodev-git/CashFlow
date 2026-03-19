import UserService from "../services/UserService.js"
class UserController {
    async list(req, res){
        try{
            const users = await UserService.list()
            return res.status(200).json(users)
        }catch(erro){
            return res.status(500).json({
                success: false,
                message: "Erro interno no servidor"
            })
        }
    }
    async listId(req, res){
        try{
            const {id} =  req.params
            const user = await UserService.listId(id)
            return res.status(200).json(user)
        }catch(erro){
            return res.status(500).json({
                success: false,
                message: "Erro interno no servidor"
            })
        }
    }
    async findByEmail(req, res){
        try{
            const {email} = req.body
            const user = await UserService.findByEmail(email)
            return res.status(200).json(user)
        }catch(erro){
            return res.status(500).json({
                success: false,
                message: "Erro interno no servidor"
            })
        }
    }
    async create(req, res){
        try{
            const result = await UserService.create(req.body)
            return res.status(200).json(result)
        }catch(erro){
            return res.status(500).json({
                success: false,
                message: "Erro interno no servidor"
            })
        }
    }
    async update(req, res){
        try{
            const {id} = req.params
            const result = await UserService.update(id, req.body)
            return res.status(200).json(result)
        }catch(erro){
            return res.status(500).json({
                success: false,
                message: "Erro interno no servidor"
            })
        }
    }
    async delete(req, res){
        try{
            const {id} = req.params
            const result = await UserService.delete(id)
            return res.status(200).json(result)
        }catch(erro){
            return res.status(500).json({
                success: false,
                message: "Erro interno no servidor"
            })
        }
    }
    async login(req, res){
        try{
            const {email, password} = req.body       
            const result = await UserService.login(email, password)
            return res.status(200).json(result)
        }catch(erro){
            return  res.status(500).json({
                success: false,
                message: "Erro interno no servidor"
            })
        }
    }
}
export default new UserController()