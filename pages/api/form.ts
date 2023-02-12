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
    const resualt = await api.sendMessage('please grade the following Comp Sci given the following: Prompt:' + body.prompt + ', Rubric:' + body.rubric + ', Response:' + body.response + "please only return grade percentage")



    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({ data: resualt.text })
}