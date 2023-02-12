import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { ChatGPTAPI } from 'chatgpt'
const inter = Inter({ subsets: ['latin'] })


const handleSubmit = async (event) => {
  // Stop the form from submitting and refreshing the page.
  event.preventDefault()

  // Get data from the form.
  const data = {
    rubric: event.target.Rubric.value,
    prompt: event.target.Prompt.value,
    response: event.target.Responce.value,
  }

  
  const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY
  })
  if (!data.rubric) {
    data.rubric = "N/A"
  }
  const result = await api.sendMessage('please grade the following Comp Sci given the following: Prompt:' + data.prompt + ', Rubric:' + data.rubric + ', Response:' + data.response + "please only return grade percentage")
  alert(`Assignment Grade: ${result.text}`)
}





export default function Home() {
  return (
    <>
    <header>
      <title>GPT Grader</title>
    </header>
    <main >
      <div className=' text-center'>
        <text className=' text-center text-6xl'>GPT-GRADER</text>
      </div>
      
      <div className='  text-center pt-20'>
          <form onSubmit={handleSubmit} className=' ' netlify>
            <div className=' '>
              <label htmlFor="Rubric">Rubric: </label>
              <input type="text" id="Rubric" name="Rubric" />
            </div>
            <div className=' '>
            <label htmlFor="Promt">Prompt: </label>
            <input type="text" id="Prompt" name="Prompt" required />
            </div>
            <div className=' '>
            <label htmlFor="Promt">Response:  </label>
            <input type="text" id="Responce" name="Responce" required />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
    </main>
    </>
  )
}
