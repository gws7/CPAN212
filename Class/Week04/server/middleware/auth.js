const auth = (req, res, next) => {
    if (req.query.username == "Gabriel") {
        next();
    } else {
        res.send("No access - wompwomp")
    }
}

export default auth;