const express = require("express");
const router = express.Router()
const Account = require("./accounts-model")

router.get("/", async (req, res, next) => {
    try{
        const data = await Account.get()
        res.json(data)
    } catch (err) {
        next(err)
    }
});

router.get('/:id', async (req, res, next) => {
    try{
        const {id} = req.params
        const data = await Account.getById(id)
        res.json(data)
    } catch(err) {
        next(err)
    }
})

router.post('/', async (req,res,next) => {
    try{
        const account = req.body
        const data = await Account.create(account)
        res.json(data)
    } catch(err){
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
    try{
        const {id} = req.params
        const account = req.body
        const data = await Account.update(id, account)
        res.json(data)
    }catch(err){
        next(err)
    }
})


router.delete('/:id', async (req,res,next) => {
    try{
        const {id} = req.params
        const data = await Account.remove()
        res.json(data)
    } catch(err) {
        next(err)
    }
})

router.use((err, req, res, next) => {
    res.status(500).json({ message: err.message })
  })
  

module.exports = router;