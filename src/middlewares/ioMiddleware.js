module.exports = function ioMiddleware(io) {
  return (request, response, next) => {
    request.io = io;
    next();
  };
};
