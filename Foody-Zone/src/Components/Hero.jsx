import React from 'react'

const Hero = () => {
  const data = [
    {
      title: "Boiled Eggs",
      description: "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.",
      image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 10.00
    },
    {
      title: "Pancakes",
      description: "Fluffy pancakes served with maple syrup and butter. A delightful breakfast treat.",
      image: "https://images.unsplash.com/photo-1575853121743-60c24f0a7502?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 15.00
    },
    
];


  return (
    <div className='hero'>
      {data.map((item, index) => {
        return (
          <div key={index} className='food-container'>
            <img src={`${item.image}`} alt="" />
            <div className="details">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <h3 className='price-btn'>${item.price}</h3>
            </div>
          </div>
        )
    })}
    </div>
  )
}

export default Hero
