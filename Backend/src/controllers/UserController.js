import UserService from "../services/UserService.js"
class UserController {
    async list(req, res){
        const users = await UserService.list()
        return res.status(200).json(users)
    }
    async listId(req, res){
        const {id} =  req.params
        const user = await UserService.listId(id)
        return res.status(200).json(user)

    }
    async create(req, res){
        const result = await UserService.create(req.body)
        return res.status(200).json(result)
    }
    async update(req, res){
        const {id} = req.params
        const result = await UserService.update(id, req.body)
        return res.status(200).json(result)
    }
    async delete(req, res){
        const {id} = req.params
        const result = await UserService.delete(id)
        return res.status(200).json(result)
    }
    async login(req, res){  
        const result = await UserService.login(req.body)
        return res.status(200).json(result)
    }
}
export default new UserController()