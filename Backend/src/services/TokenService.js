import jwt from "jsonwebtoken";

class TokenService {
    async generateToken(data) {
        const token = jwt.sign(
        {
            id: data.id,
            email: data.email,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "31d"
        },
        );
        return token
    }
    }
export default new TokenService()
