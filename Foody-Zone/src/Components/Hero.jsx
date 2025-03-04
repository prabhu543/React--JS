import React from 'react'

const Hero = () => {
  const data = [
    {
      title : "Boiled Eggs",
      description : "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. ",
      image : "https://images.unsplash.com/photo-1606788326251-8c1d7f2d7e5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price : 10.00
    },
    {
        title: "Pancakes",
        description: "Fluffy pancakes served with maple syrup and butter. A delightful breakfast treat.",
        image: "https://images.unsplash.com/photo-1586985289368-0926e1a4e1a7",
        price: 15.00
    },
    {
        title: "Grilled Sandwich",
        description: "Crispy grilled sandwich with fresh veggies, cheese, and a hint of spice.",
        image: "https://images.unsplash.com/photo-1547592180-0d6363d949e2",
        price: 12.50
    }
  ]

  return (
    <div className='hero'>
      <div>
        <img src={`${data[0].image}`} alt="" />
        <div className="details">
          <h2>{data[0].title}</h2>
          <p>{data[0].description}</p>
          <h3>${data[0].price}</h3>
        </div>
      </div>
    </div>
  )
}

export default Hero
