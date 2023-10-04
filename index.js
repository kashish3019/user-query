const express = require("express");
const db = require("./db");
const usersdata = require("./schema");
const app = express()
app.use(express.json())

app.get("/", async (req, res) => {
    const { gender } = req.query
    const data = await usersdata.find({ gender: "Female" })
    res.status(200).json({ data });
})

app.get("/language", async (req, res) => {
    const { gender, language } = req.query
    const data = await usersdata.find({ gender: "Female", language: { $in: ["Kannada", "Hindi"] } })
    res.status(200).json({ data });
})

app.get("/speak",async(req,res)=>{
    const { gender, language } = req.query
    const data = await usersdata.find({$or: [{gender: "Male", language: "Hindi"}, {gender: "Female", language: "Kannada"}]})
    res.status(200).json({ data });
})

app.get("/shirtS",async(req,res)=>{
    const { shirt_size } = req.query
    const data = await usersdata.find({shirt_size: "S"})
    res.status(200).json({ data });
})

app.get("/shirtXL",async(req,res)=>{
    const { gender,shirt_size } = req.query
    const data = await usersdata.find({gender: "Female", shirt_size: "XL"})
    res.status(200).json({ data })
})

app.listen(8090, () => {
    console.log("listing port 8090");
    db()
})