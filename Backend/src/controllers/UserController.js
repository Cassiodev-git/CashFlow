import UserService from "../services/UserService.js"
class UserController {
    async listId(req, res){
        const use = await UserService.listId(req.user.id)
        return res.status(200).json(use)
    }
    async create(req, res){
        const result = await UserService.create(req.body)
        return res.status(200).json(result)
    }
    async update(req, res){
        const result = await UserService.update(req.params.id, req.body)
        return res.status(200).json(result)
    }
    async delete(req, res){
        const result = await UserService.delete(req.params.id)
        return res.status(200).json(result)
    }
    async login(req, res){  
        const result = await UserService.login(req.body)
        return res.status(200).json(result)
    }
}
export default new UserController()