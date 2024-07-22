function filePath(path) {
    return function cors(req, res, next) {
        req.filePath = path
        next();
    }

}
module.exports = filePath