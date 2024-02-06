const zod = require('zod')

const user = zod.object({
    username: zod.string(),
    password: zod.string()
})

module.exports.userValid = (req,res,next)=>{
    const {username, password} = req.body
    const data = {
        username,
        password
    }
    const response = user.safeParse(data)
    if(!response.success){
    res.status(411).json({msg: 'Wrong input'})
    return}
    next();
}