console.log("here")
import { ChatGPTAPI } from 'chatgpt'

export default async function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
    const api = new ChatGPTAPI({
        apiKey: process.env.OPENAI_API_KEY
    })
    if(!body.rubric){
        body.rubric = "N/A"
    }
    const resualt = await api.sendMessage('grade the following assignment based on the following: Prompt:' + body.prompt + ', Rubric:' + body.rubric + ', Response:' + body.response + "please only return grade percentage grade the assignment as if you were a highschool teacher and make sure all statments are factually acurate")



    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({ data: resualt.text })
}
