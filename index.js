/**
 * Cloud Function.
 *
 * @param {object} event The Cloud Functions event.
 * @param {function} callback The callback function.
 */
exports.helloWorld = function helloWorld (req, res) {
  console.log(req.body['message']);
  res.status(200).send('Success : ' + req.body['message']);
};

