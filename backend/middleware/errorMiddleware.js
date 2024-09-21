const errorMiddleware = (err, req, res, next) => {
  console.log(err.stack);

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);

  res.json({
    message: err.message,
    stack: err.stack,
  });
};

module.exports = errorMiddleware;
