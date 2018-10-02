/* eslint-disable arrow-body-style */
module.exports = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};
