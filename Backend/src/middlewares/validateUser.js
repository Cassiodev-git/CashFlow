export function validateUser(req, res, next) {
    const data = req.body

    const rules = {
        name: {
            type: "string",
            required: true,
            validate: (v) => v.trim() !== "",
            message: "O nome não pode ser vazio"
        },
        email: {
            type: "string",
            required: true,
            validate: (v) => v.includes("@"),
            message: "Email inválido"
        },
        password: {
            type: "string",
            required: true,
            validate: (v) => v.trim().length >= 6,
            message: "A senha deve ter no mínimo 6 caracteres"
        }
    }

    for (const [field, rule] of Object.entries(rules)) {
        const value = data[field]

        if (rule.required && !value) {
            return res.status(400).json({
                success: false,
                message: `O campo ${field} é obrigatório`
            })
        }

        if (!value) continue

        if (typeof value !== rule.type) {
            return res.status(400).json({
                success: false,
                message: `O campo ${field} deve ser do tipo ${rule.type}`
            })
        }

        if (rule.validate && !rule.validate(value)) {
            return res.status(400).json({
                success: false,
                message: rule.message || `O campo ${field} é inválido`
            })
        }
    }

    return next()
}