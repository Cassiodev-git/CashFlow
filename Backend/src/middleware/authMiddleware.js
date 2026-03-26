import Jwt from "jsonwebtoken"
export function authMiddleware(req, res, next){
    const authToken = req.headers.authorization
    if(!authToken){
        return res.status(401).json({
            success: false,
            message: "Token não informado"
        })
    }
    const parts = authToken.split(" ")
    if(parts.length !== 2){
            return res.status(401).json({
                success: false,
                message: "Token mal formatado"
            })
        }
    const [scheme, token] = parts
    if(scheme !== "Bearer"){
        return res.status(401).json({
            success: false,
            message: "Token mal formatado"
        })
    }
    try{
        
        const tokenDecoded = Jwt.verify(token, process.env.JWT_SECRET)
        req.user = {
            id: tokenDecoded.id,
            email: tokenDecoded.email
        }
        return next()
    }catch(erro){
        return res.status(401).json({
            success: false,
            message: "Token inválido ou expirado"
        })
    }
}