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
    {
      title: "Grilled Sandwich",
      description: "Crispy grilled sandwich with fresh veggies, cheese, and a hint of spice.",
      image: "https://images.unsplash.com/photo-1645702352056-21846d31b13b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 12.50
    },
    {
      title: "Spaghetti Carbonara",
      description: "Classic Italian pasta dish with creamy sauce, pancetta, and Parmesan cheese.",
      image: "https://images.unsplash.com/photo-1604909052824-b9774c158db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 18.99
    },
    {
      title: "Cheeseburger",
      description: "Juicy grilled beef patty with melted cheese, lettuce, tomato, and special sauce.",
      image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 14.50
    },
    {
      title: "Sushi Platter",
      description: "Assorted fresh sushi and sashimi served with soy sauce and wasabi.",
      image: "https://images.unsplash.com/photo-1580828342029-c79a3a405081?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 22.00
    },
    {
      title: "Caesar Salad",
      description: "Fresh romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.",
      image: "https://images.unsplash.com/photo-1592928300615-027e3b1ddb2a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 9.75
    },
    {
      title: "Chocolate Cake",
      description: "Rich and moist chocolate cake with creamy chocolate frosting.",
      image: "https://images.unsplash.com/photo-1606851095726-632531db74a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 8.99
    },
    {
      title: "Tandoori Chicken",
      description: "Indian-style roasted chicken marinated with yogurt and spices.",
      image: "https://images.unsplash.com/photo-1647309848643-5c71c9f4c75d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 17.25
    },
    {
      title: "Ice Cream Sundae",
      description: "Vanilla ice cream topped with chocolate syrup, nuts, and a cherry.",
      image: "https://images.unsplash.com/photo-1527515545081-5db817172677?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 7.50
    }
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
