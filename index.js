/**
 * Cloud Function.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */
exports.helloWorld = function helloWorld(req, res) {
  console.log(req.body.message);
  res.status(200).send('Success : ' + req.body.message);
};

