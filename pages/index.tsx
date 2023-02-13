import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

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

  const JSONdata = JSON.stringify(data)
  const endpoint = '/api/form'

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSONdata,
  }

  const response = await fetch(endpoint, options)

  const result = await response.json()
  alert(`Assignment Grade: ${result.data}`)
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
          <form onSubmit={handleSubmit} className=' '>
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
