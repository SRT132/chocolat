const express = require("express")
const router = express.Router()

router.get("/", function (requst, response) {
    response.render("note", {})
})

module.exports = router