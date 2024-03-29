import UserService from "../services/user-service.js";

const userService  = new UserService();

export const signup  = async (req,res)=>{
    try {
        const user = await userService.signup({
            email : req.body.email,
            Password : req.body.Password,
            name : req.body.name,
            phone_number: req.body.phone_number,
            priority: req.body.priority
        });
        return res.status(201).json({
            success : true,
            message : 'Succesfully signIn',
            data : user,
            err: {}
        })
    } catch(error) {
        return res.status(500).json({
            success : false,
            message : ' something went wrong ',
            data : {},
            err: error
        })
    }
}

export const login = async (req, res) => {
    try {
        const token = await userService.signin(req.body.email,req.body.Password);
        return res.status(200).json({
            success : true,
            message : ' sccessfully logged in',
            JWT_token : token,
            err: {}
        })
    } catch(error) {
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: error
        });
    }
}
