const errMessage = (statusCode, message, additionalProps = {}) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  const propsToSpread =
    typeof additionalProps === "object" && additionalProps !== null
      ? additionalProps
      : {};
  Object.assign(error, propsToSpread);
  return error;
};

module.exports = errMessage;
