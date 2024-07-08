const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
    // Extract the 'Authorization' header from the request
    const authHeader = req.headers["authorization"];
    // Split the Authorization header value to retrieve the token (Bearer token)
    //Bearer tokens are related to clients and are used specifically for authentication purposes. They allow clients (such as web applications, mobile apps, or other services) to securely authenticate themselves with a server to access protected resources or perform actions on behalf of a user.
    const token = authHeader && authHeader.split(" ")[1];

    // If no token is present, return a 401 Unauthorized response
    if(!token){
        console.log("No token found");
        return res.status(401).json({ error: true, message: "Unauthorized: No token provided" });
    }
        
    // console.log("ACCESS_TOKEN_SECRET during token verification:", process.env.ACCESS_TOKEN_SECRET);
    // Verify the token using the JWT library and the ACCESS_TOKEN_SECRET from environment variables
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {

        // If there's an error during verification, return 401 Unauthorized
        if(err){
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({ error: true, message: "Unauthorized: Token expired" });
            }
            return res.status(401).json({ error: true, message: "Unauthorized: Token verification failed" });
        }

        // If verification is successful, attach the user information to the request object
        req.user = user;

        // Call the next middleware function in the chain
        next();
    }); 
}

// Export the middleware function so it can be used in other parts of the application
module.exports = {
    authenticateToken,
};