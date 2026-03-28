export function  validateUser(req, res, next){
    const data = req.body
    const rules = {
        name: {type: "string", required: true, validate: (v) => v.trim() !== ""},
        email:{ type: "string", required: true, validate: (v) => v.includes('@') },
        password:{ type: "string", required: true, validate: (v) => v.trim() !== "" },
    }
    for (const [field, rule] of Object.entries(rules)){
        const value = data[field]
        if(rule.required && !value){
            return res.status(400).json({
                success: false,
                message: `O campo ${field} é obrigatório`
            })
        }
        if(!value) continue
        if(typeof value !== rule.type){
            return res.status(400).json({
                success: false,
                message: `O campo ${field} deve ter o tipo ${rule.type}`
            })
        }
        if(rule.validate && !rule.validate(value)){
            return res.status(401).json({
                success: false,
                message: `O campo ${field} é inválido`
            })
        }
    }
    return next()
}