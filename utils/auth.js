const authorize = (req, res, next) => {
  // Authorize a user to create, edit and delete

  // Still unsure about if this works yet
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = authorize;
