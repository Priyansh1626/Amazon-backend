const jwt = require("jsonwebtoken");
const AmazonUser = require("../modals/newUser");

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token, process.env.SECRET_KEY);

        const user = await AmazonUser.findOne({ _id: verifyUser._id });

        req.token = token;
        req.user = user;

        next();

    } catch (e) {
        res.send(e).status(401);
    }
}

module.exports = auth;

