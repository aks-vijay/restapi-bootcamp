// @desc    logs method and url requested by client
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.path}`);
  next();
};

module.exports = logger;
