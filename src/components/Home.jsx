import React from 'react'
import img1 from '../images/img.jpeg'
import './Home.css'

const Home = (props) => {
  return (
      <div>
          <div className = "add-to-cart">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt="add-to-cart"/>
              </div>
          
          <h1> Home</h1>
          <div className = "cart-wrapper">
              <div className = "img-wrapper item">
                  <img src={img1} alt="iphone" />
              </div>
              <div className = "text-wrapper item">
                  <span>
                      I-phone
                  </span>
                  <span>
                      Price: $1000
                  </span>
              </div>
              <div className = "btn-wrapper item">
                  <button onClick={() => {
                      props.addToCartHandler({
                          price: "$1000",
                          name: "Iphone-14"
                      })
                  }}>Add to Cart</button>
          </div>
              
          </div>
      </div>
  )
}

export default Home