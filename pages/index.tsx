const version = "0.16"
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import React from 'react';
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [grade,setGrade] = React.useState("N/A")
  async function handleSubmit(event) {
    // Stop the form from submitting and refreshing the page.
    setGrade("loading")
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
    console.log(result.data)
    setGrade(result.data)
    console.log(grade)
  }
  return (
    <>
    <header>
      <title>GPT Grader</title>
    </header>
    <main >
      <div className=' text-center'>
        <text className=' text-center text-6xl'>GPT-GRADER</text>
        <br></br>
        <text className=" text-center ">version : {version}</text>
      </div>
      
      <div className='  text-center pt-20'>
          <form onSubmit={handleSubmit} className=' '>
            <div className=' '>
              <label htmlFor="Rubric">(optional) Rubric: </label>
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
        <div className=' text-center'>
          <text>{grade}</text>
        </div>
    </main>
    </>
  )
}
