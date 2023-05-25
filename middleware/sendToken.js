// create a token and save it in a cookie

const sendtoken = (user, statusCode, res) => {
    const token = user.getJWTToken();

    //options for cookie
    const options = {
        expires: new Date(
            // things to remember we need to take cookie expire time in numbers only and for jwt token we need to yake it in string+hour value
            Date.now() + 24
        ),
        httpOnly: true,
    };
    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user, 
        token
    })
}

module.exports = sendtoken;