const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const dataModel = require("./Models/Data")
const userModel = require("./Models/User")

const app=express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://Sherin:Sherin3616@cluster0.8zxvlcz.mongodb.net/journalDb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/journal",(request,response)=>{
    const date = String(request.body.date)
    const mood = String(request.body.mood)
    const highlight = String(request.body.highlight)
    const foodlog = String(request.body.foodlog)
    const goal_status = String(request.body.goal_status)
    const rating = String(request.body.rating)
    const anxiety = String(request.body.anxiety)
    const notes = String(request.body.notes)

    let data_store = new dataModel(
        {
            date: date,           
            mood: mood,
            highlight: highlight,
            foodlog: foodlog,
            goal_status: goal_status,
            rating: rating,
            anxiety: anxiety,
            notes: notes
        }
    )
    data_store.save()
    response.json({"Date": date,"Mood": mood,"Highlight": highlight,"Food_Log": foodlog,"Goal_status": goal_status,"Rating": rating,"Anxiety": anxiety,"Notes": notes})


})

/*app.post("/register",(request,response)=>{
    const username = request.body.username
    const password = request.body.password
    const emailid = request.body.emailid

    try{
        console.log(request.body)
        userModel(request.body).save()
        response.status(200).json({ message : "Successfully Inserted!! "})
    }
    catch{
        response.status(500).json({ error: "Failed to insert user." });
    }
})

app.post("/login",(request,response)=>{
    const username = String(request.body.username)
    const password = request.body.password


})*/

app.get("/journals",(request,response)=>{
    dataModel.find().then((items)=>{response.json(items)}).catch()
})

app.listen(4000,()=>{
    console.log("Server is running...")
})