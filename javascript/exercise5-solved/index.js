/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
  var normalizedHashTags = hashtags.map(item => item.toLowerCase())
    .filter((val, i, arr) => {
      return (i <= arr.indexOf(val))
    });
  return normalizedHashTags.join(', ');
};
