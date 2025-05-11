const resMessage = (message, additionalProps = {}) => {
  const propsToSpread =
    typeof additionalProps === "object" && additionalProps !== null
      ? additionalProps
      : {};
  return { error: false, message, ...propsToSpread };
};

module.exports = resMessage;
