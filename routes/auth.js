const router = require("express").Router();
const User = require ("../models/User");


//Register a user
router.post("/register", async (req,res) => {
    await new User ({
        username: "josh",
        email: "joshlittle@gmail.com",
        password: "1234567888"
    });
    await User.save();
   res.send("ok")
});



module.exports = router;