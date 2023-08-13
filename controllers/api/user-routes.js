const router = require("express").Router();
const { User } = require("../../models");

// get all users
router.get("/", async (req, res) => {
  const allUsers = await User.findAll();
  res.json(allUsers);
});

// create user
router.post("/", async (req, res) => {
  try {
    const postText = await User.create(req.body);
    console.log("post created");

    console.log(postText.id);

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = postText.id;
      console.log(
        "File: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie",
        req.session.cookie
      );

      res.status(200).json({ message: "You are now logged in!" });
    });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ error: "Email address must be unique." });
    }
    console.error(err);
    return res
      .status(500)
      .json({ error: "An error occurred while creating the user." });
  }
});

// get single user
router.get("/:id", async (req, res) => {
  const singleUser = await User.findByPk(req.params.id);
  console.log(`found user ${req.params.id}`);
  res.json(singleUser);
});

// delete user
router.delete("/:id", async (req, res) => {
  const findUser = await User.destroy({
    where: { id: req.params.id },
  });
  console.log(`User Deleted`);
  res.json(findUser);
});

// update post =  successful
router.put("/:id", async (req, res) => {
  try {
    const updatePost = await User.update(
      {
        first_name: req.body.first_name,
        location: req.body.location,
        email: req.body.email,
        password: req.body.password,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    console.log("updated");
    res.json("updated user");
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ error: "Email address must be unique." });
    }
    console.error(err);
    return res
      .status(500)
      .json({ error: "An error occurred while creating the user." });
  }
});

// User logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
