export function validateTransaction(req, res, next) {

    const { type, value, description, CategoryId, date } = req.body

    if(!type){
        return res.status(400).json({
            success: false,
            message: "Tipo é obrigatório"
        })
    }

    if(type !== "income" && type !== "expense"){
        return res.status(400).json({
            success: false,
            message: "Tipo deve ser income ou expense"
        })
    }

    if(!value || isNaN(value)){
        return res.status(400).json({
            success: false,
            message: "Valor deve ser um número"
        })
    }

    if(!description){
        return res.status(400).json({
            success: false,
            message: "Descrinção é obrigatória"
        })
    }

    if(!CategoryId){
        return res.status(400).json({
            success: false,
            message: "Categoria é obrigatória"
        })
    }

    if(!date){
        return res.status(400).json({
            success: false,
            message: "Data é obrigatória"
        })
    }

    next()
}