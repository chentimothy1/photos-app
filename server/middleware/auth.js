import jwt from 'jsonwebtoken';

const secret = 'test';
//clicks the like button -> auth middleware(). if the authmiddleware says he can like it, we send it to the 
// like middleware 


const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, secret);
            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }

        next();
    } catch (error) {
        console.log(error)
    }
}

export default auth;