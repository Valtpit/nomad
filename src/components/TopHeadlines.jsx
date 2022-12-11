import { useEffect, useState } from 'react'
import Details from './Details'

function TopHeadlines () {
  const [items, setItems] = useState([])
  const [country, setCountry] = useState("gb")
  const [category, setCategory] = useState("general")
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  const countries = [{short:"gb", long: "United Kingdom"}, {short:"au", long: "Australia"}, {short:"ca", long: "Canada"}, {short:"us", long: "United States"}, {short:"de", long: "Germany"}, {short:"se", long: "Sweden"}]
  const categories = ["general", "business", "entertainment", "health", "science", "sports", "technology"]

  useEffect(() => {
    const URL = 'https://newsapi.org/v2'
    let CRITERIA = "/top-headlines?country="+ country +"&category=" + category 
    const APIKEY = '0525752086b04125a9ff8e2c62c59c18'
    const ADDRESS = URL + CRITERIA + '&apiKey=' + APIKEY
    fetch(ADDRESS)
      .then(res => res.json())
      .then(
        result => {
          setError(null)
          setIsLoaded(true)
          if (typeof result.articles === 'undefined') {
            setError({ message: 'Error retrieving data' })
          } else {
            setItems(result.articles)
          }
        },
        error => {
          setError(error)
          setIsLoaded(true)
          setItems([])
        }
      )
  }, [country, category])

  function RNG (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  let randomNumber = RNG(0, 20)

  function close () {
    setSelectedItem(null)
  }

  if (selectedItem != null) {
    return (
      <Details
        title={selectedItem.title}
        author={selectedItem.author}
        image={selectedItem.urlToImage}
        description={selectedItem.description}
        close={close}
      ></Details>
    )
  } else if (error) {
    return <p>{error.message}</p>
  } else if (!isLoaded) {
    return <p>Loading...</p>
  } else {
    return (
      <div className='bg'>
        <div className='body'>
          {/* maan valinta */}
          <div>
          <label htmlFor="counrty">Country selection:</label>
          <select name="country" id="country" onChange={e => setCountry(e.target.value)}>
            {countries.map(res => (
                  <option key={res.short} value={res.short}>{res.long}</option>
              ))}
          </select>
          </div>
          {/* kategorian valinta */}
          <div>
          <label htmlFor="category">Category selection:</label>
          <select name="category" id="category" onChange={e => setCategory(e.target.value)}>
            {categories.map(res => (
                  <option key={res} value={res}>{res}</option>
              ))}
          </select>
          </div>
          {/* random uutinen nappi */}
          <div>
            <p>Click the button for a random news article</p>
            <button onClick={e => setSelectedItem(items[randomNumber])}>
              Random button
            </button>
          </div>

          <div>
            {items.map(item => (
              <div
                key={item.title}
                onClick={e => setSelectedItem(item)}
                className='news'
              >
                <h3>{item.title}</h3>
                <p>Author: {item.author}</p>
                <img src={item.urlToImage}></img>
                <hr></hr>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default TopHeadlines