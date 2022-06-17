// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  PUBLIC
exports.getBootcamps = (req, res, next) => {
  let status_json = {
    success: true,
    message: "Show all bootcamps",
  };

  res.status(200);
  res.json(status_json);
};

// @desc    Get single bootcamps
// @route   GET /api/v1/bootcamps/:id
// @access  PUBLIC
exports.getBootcamp = (req, res, next) => {
  let status_json = {
    success: true,
    message: `Display bootcamp number ${req.params.id}`,
  };

  res.status(200);
  res.json(status_json);
};

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps/:id
// @access  PRIVATE
exports.createBootcamp = (req, res, next) => {
  let status_json = {
    success: true,
    message: "Create a new bootcamp",
  };

  res.status(200);
  res.json(status_json);
};

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  PRIVATE
exports.updateBootcamp = (req, res, next) => {
  let status_json = {
    success: true,
    message: `Create bootcamp number ${req.params.id}`,
  };

  res.status(200);
  res.json(status_json);
};

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  PRIVATE
exports.deleteBootcamp = (req, res, next) => {
  let status_json = {
    success: true,
    message: `Delete bootcamp number ${req.params.id}`,
  };

  res.status(200);
  res.json(status_json);
};
