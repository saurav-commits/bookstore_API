const User = require("../model/user");
const sendToken = require("..//middleware/sendToken");

// register a new user
exports.registerUser = async(req, res) => {
        const {
            name, email, password
        }= req.body;

        const user = await User.create({
            name,
            email, 
            password,
        }); 

        sendToken(user, 201, res);
    
}

// login a user

// exports.loginUser =  async (req, res) => {
//    try{

//     const {
//         email,password
//     } = req.body;

//     // validation for email/password provided 
//     if(!email || !password) return res.status(400).json({msg:"Invalid email/password"});

//     const user = await User.findOne({email}).select("+password");

//     if(!user) return res.status(401).json({msg: "User not found"});

//     // verify password
//     const passwordMatch = await bcrypt.compare(password, user.password);

//     // if password does not match
//     if(!passwordMatch) return res.status(401).json({message:"Authentication failed"});

//     // create a json web token

//     const token = jwt.sign({ userId: user.id, email: user.email },
//         "secretkey", { expiresIn: "24h" });

//         res.status(200).json({token});

//    }catch(err){
//     console.error(err);
//     res.status(500).json({message: "Internal server error"});
//    }
// }


// login second implemetation

exports.loginUser = async(req, res)=> {
    const { email, password } = req.body;

    // check if user has given password and email
    if(!email || !password) return res.status(400).json({msg:"Invalid email/password"});

    const user = await User.findOne({ email }).select("+password");

    if(!user) return res.status(401).json({msg:"User not found"});

    const isPasswordMatched = user.comparePassword(password);

    if(!isPasswordMatched) return res.status(401).json({msg:"User/Password Invalid"});

    sendToken(user, 200, res);
}


// Logout a user

  









