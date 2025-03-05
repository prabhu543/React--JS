import React ,{useState , useEffect} from 'react'
import Header from "./Components/Header"
import Hero from "./Components/Hero"
// import Footer from "./Components/Footer"
const BASE_URL = "http://localhost:9000/"

const App = () => {
  const [ data , setData ] =  useState(null);
  const [loading , setLoading] = useState(false)
  const [error , setError] = useState(null)

  useEffect(()=>{
    const fetchData = async () => {
      setLoading(true)
      try{
        const response = await fetch(BASE_URL);
        const json = await response.json();
  
        setData(json)
        setLoading(false)
      }
      catch (err){
        setError("unable to fetch")
      }
    }
    fetchData()
  },[])

  console.log(data)

  if(error) return <div>{error}</div>
  if(loading) return <div>Loading.....</div>

  return (
    <div className="container">
      <Header/>
      <Hero/>
    </div>
  )
}

export default App
