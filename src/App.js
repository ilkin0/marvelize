import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import crypto from 'crypto'
import './App.css'

const ts = new Date().getTime
const hash = crypto
  .createHash('md5')
  .update(
    ts +
      process.env.REACT_APP_MARVEL_PRIVATE_KEY +
      process.env.REACT_APP_MARVEL_API_PUBLIC_KEY
  )
  .digest('hex')

const charactersUrl =
  process.env.REACT_APP_MARVEL_API_BASE_URL +
  'characters?ts=' +
  ts +
  '&apikey=' +
  process.env.REACT_APP_MARVEL_API_PUBLIC_KEY +
  '&hash=' +
  hash

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(charactersUrl)

      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [])

  return (
    <div className="container">
      <Header />
    </div>
  )
}

export default App
