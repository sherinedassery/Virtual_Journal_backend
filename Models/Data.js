const mongoose=require("mongoose")

const dataSchema = mongoose.Schema(
    {
            date: String,           
            mood: String,
            highlight: String,
            foodlog: String,
            goal_status: String,
            rating: String,
            anxiety: String,
            notes: String
        }
)

const dataModel = mongoose.model("journalDatas",dataSchema)
module.exports = dataModel