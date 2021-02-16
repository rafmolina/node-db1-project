const express = require("express");
const router = express.Router()
const Accounts = require("./accounts-model")

router.get("/", async (req, res, next) => {
    try{
        const data = await Accounts.get()
        res.json(data)
    } catch (err) {
        next(err)
    }
});