import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'



const URL = 'https://api.nasa.gov/planetary/apod?api_key=${api_key=DEMO_KEY}'


export default function App() {
  const [data, setData] = useState()

  useEffect(() => {
    function fetchAPOD(){
    axios.get(URL)
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.log(error.message)
      
    })
  }
   fetchAPOD()
  }, [])

  if (!data) return <p>Fetching data...</p>
  return (
    <section>
      <Card
      title={data.title}
      text={data.explanation}
      image={data.url}
      author={data.copyright}
      date={data.date}
      
      />
      
    </section>
  )
}


