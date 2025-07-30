const app = require("express");
const router = app.Router();

router.get("/", (req, res) => {
  res.send("Users list");
});

router.get("/new", (req, res) => {
  res.render("users/new");
});

router.post("/", (req, res) => {
  console.log(req.body.firstName);
  res.send("User created");
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(`User details for ID: ${req.params.id}`);
    console.log(req.user);
  })
  .put((req, res) => {
    res.send(`User with ID: ${req.params.id} updated`);
  })
  .delete((req, res) => {
    res.send(`User with ID: ${req.params.id} deleted`);
  });

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

router.param("id", (req, res, next, id) => {
  const user = users.find((u) => u.id === parseInt(id));
  if (!user) {
    return res.send("User not found");
  } else {
    req.user = user;
    next();
  }
});

module.exports = router;
