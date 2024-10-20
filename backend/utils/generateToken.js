import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId , res)=>
{
    console.log(process.env.JWT_SECRET);
    
    const token = jwt.sign({id: userId}, process.env.JWT_SECRET,
        {expiresIn:'15d'})
        console.log(token);
        

    res.cookie("jwt",token,{
        maxAge: 15 * 24 *60 * 60 * 1000,// ms
        httpOnly:true, // prevent XSS attacks cross-site scripting attacks 
        sameSite :"strict" ,// cross attack 
        secure:process.env.NODE_ENV === "development"
    });
};

export default generateTokenAndSetCookie;