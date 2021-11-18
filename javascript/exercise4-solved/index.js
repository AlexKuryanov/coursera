/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
  var hashTagsList = tweet.split(" ")
                          .filter(item => item.startsWith('#'))
                          .map(item => item.slice(1));
  return hashTagsList !== [] ? hashTagsList : [];
};
