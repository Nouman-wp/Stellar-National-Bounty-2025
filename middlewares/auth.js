
module.exports.ensureWallet = (req, res, next) => {
  if (req.session.walletAddress) {
    return next();
  }
  return res.redirect('/');
};


