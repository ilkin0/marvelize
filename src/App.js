import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
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

// const charactersUrl =
//   process.env.REACT_APP_MARVEL_API_BASE_URL +
//   'characters?ts=' +
//   ts +
//   '&apikey=' +
//   process.env.REACT_APP_MARVEL_API_PUBLIC_KEY +
//   '&hash=' +
//   hash

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        process.env.REACT_APP_MARVEL_API_BASE_URL +
          // `characters?nameStartsWith=${query}&orderBy=name&ts=` +
          `characters?&orderBy=name&ts=` +
          ts +
          `&apikey=` +
          process.env.REACT_APP_MARVEL_API_PUBLIC_KEY +
          `&hash=` +
          hash
      )

      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  )
  //TODO pagination
}

export default App
