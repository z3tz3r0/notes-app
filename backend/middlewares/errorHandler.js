const errorHandler = async (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  const newError = {
    error: true,
    statusCode,
    reason: message,
  };

  if (process.env.NODE_ENV === "development") {
    newError.stack = err.stack;
  }
  console.error(newError);
  res.status(statusCode).json(newError);
};

module.exports = errorHandler;
