import registration_schema from "../model/registration_schema.js";
import { comparePassword, hashPassword } from "./../helper/authHelper.js";
import JWT from 'jsonwebtoken';
import contact_schema from "../model/contact_schema.js";


export const registerController = async (req, res) => {

const { fname, lname, email, Phone_number, password, confirm_password}=req.body;

if ( !fname || !lname || !email || !Phone_number || !password || !confirm_password )
{
    return res.status(422).json({error: "pls fill all field"});
}

try{

    const userExist = await registration_schema.findOne({ email:email })
    if (userExist){
        return res.status(422).json({error:"Cannot use same email twice"});
    }

    const hashedPassword = await hashPassword(password); 


    const user = new registration_schema({fname, lname, email, Phone_number, password:hashedPassword, confirm_password});

    const userregister = await user.save();
    if(userregister)
    {
        res.status(201).json({ message: "user registered successfully" });
    }


} catch(err) {
    console.log(err);
}

};




export const loginController = async (req, res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password ) {
            return res.status(404).send({
                success:false,
                message: "Invalid username or password",
            });
        }

        const user = await registration_schema.findOne({ email:email });
        console.log(user);

        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found."
            });
        }

        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(200).send({
                success: false,
                message: "wrong password",
            });
        }

        const token = await JWT.sign({_id: user._id}, process.env.JWT_SECRET,{
            expiresIn: "7d",
        });

        res.status(200).send({
            success:true,
            message:"login successfully",
            user:{
                _id:user._id,
                name:user.fname,
                lastname:user.lname,
                email:user.email,
                phone:user.Phone_number,
                password:user.password,
                confirm:user.confirm_password,
                role:user.role,
              },
              token,
             
        });



} catch(error) {
console.log(error);
res.status(500).send({
    success: false, 
    message: "login error",
    error,
});
}
};



export const contactController = async (req, res) => {

    const {cname, cemail, cmessage}=req.body;

    if (!cname, !cemail, !cmessage)
    {
        return res.status(422).json({error: "pls fill all field"});
    }

    try{

        const user = new contact_schema({cname, cemail, cmessage});

        const contactregister = await user.save();
        if(contactregister)
        {
            res.status(201).json({message: "thank you for contacting" });
        }
    }
    catch(err){
        console.log(err);
    }

}


export const testController = (req, res) => {
    try{
        res.send("protected Router");
    }catch (error){
        console.log(error);
        res.send({error});
    }
};


export const forgotPasswordController = async (req, res) => {
    try{
        const {email, newpassword, confirm } = req.body;
        if(!email) {
            res.status(400).send({ message: "email is required"});
        }
        if(!newpassword) {
            res.status(400).send({ message: "password is required"});
        }
        if(!confirm) {
            res.status(400).send({ message: "confirmation is required"});
        }
        
        const user = await registration_schema.findOne({ email });

        if (!user) {
            return res.status(404).send({
                success: false,
                message: "email not found",
            });
        }
        const hashed = await hashPassword(newpassword);
        await registration_schema.findByIdAndUpdate(user._id, { password: hashed});
        res.status(200).send({
            success: true,
            message: "Reset Successful"
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "something wong",
            error,
        });
    }
}