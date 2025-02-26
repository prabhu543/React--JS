import { useEffect, useState } from "react"


const Clock = () => {

  const [time , setTime]  = useState(new Date());

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setTime(new Date());
    },1000)

    return () =>{
      clearInterval(intervalId);
    }
  },[])


  return (
    <div>
      <h1>Bharat Clock</h1>
      <p>Date : {time.toLocaleDateString()} & time : {time.toLocaleTimeString()}</p>
    </div>
  )
}

export default Clock
