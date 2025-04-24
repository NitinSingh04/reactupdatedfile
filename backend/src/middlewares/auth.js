import jwt from "jsonwebtoken";
import { Admin } from "../models/admins.model";



const verifyUserJWT = asyncHandler( async (req,res,next) => {
    const token = req.cookies?.accessToken

    if (!token) {
        return res.status(404).json({
            message: "There is no token available."
        })
    }

    const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)

    const user = await Admin.findById(decodedToken?._id).select("-password -refreshToken")
    if (!user) {
        return res.status(409).json({
            message: "Your token is invalid."
        })
    }


    req.user = user
    next()
})


export {verifyUserJWT}