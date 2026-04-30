const ErrorResponse = require('../utils/ErrorResponse');

const errorHandler = (err, req, res, next) => {
  let error = { ...err, message: err.message };

  // Mongoose duplicate key
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    error = new ErrorResponse(`Duplicate value for field: ${field}`, 400);
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(e => e.message).join(', ');
    error = new ErrorResponse(message, 400);
  }

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    error = new ErrorResponse(`Resource not found with id of ${err.value}`, 404);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error',
  });
};

module.exports = errorHandler;
