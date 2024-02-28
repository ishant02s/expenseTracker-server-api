const errorHandler = (err, req, res, next) =>{
    //let statusCode;
    const statusCode = req.statusCode === 200 ? 500 : res.statusCode;

    res.status(statusCode);
    res.json({
        msg: err?.message,
        stack: process.env.NODE_ENV === 'production' ? null : err?.stack,
    });
};

//not found error handling
const notFound = (req, res, next) => {
    const error = new Error(`Not found Mate ${req.originalUrl}`);
    res.status(404);
    next(error);
}
module.exports = {errorHandler, notFound};