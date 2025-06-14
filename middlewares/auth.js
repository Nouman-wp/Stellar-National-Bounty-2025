function ensureWallet(req, res, next) {
  if (req.session && req.session.wallet) return next();
  res.redirect('/');
}

// middlewares/auth.js
exports.ensureWallet = (req, res, next) => {
  if (!req.session || !req.session.wallet) {
    return res.redirect("/"); // or res.status(401).send("Not logged in")
  }
  next();
};


module.exports = { ensureWallet };

