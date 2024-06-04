import React from 'react'
import './cart.css'
import image1 from './img/ang1.jpeg';
import img2 from './img/analog/watch2.jpeg';
import img3 from './img/analog/watch3.webp';
import img4 from './img/band/band1.jpg';
import img5 from './img/digital/watch1.jpg';
import img6 from './img/digital/watch3.jpeg';
const Cart=({item,additem}) =>{
    console.log("cart added")
  return (
    <div>
        <h1 className=''>Cart</h1>
        <div className='cart'>
        <div className='Product'>
            <img src={image1} alt=""/>
            <h3 className='price'>Price:2000</h3>
            <div className='button'>
            <button onClick={additem}>Add Cart</button>
            <button>Buy Now</button>
        </div>
        </div>
        <div className='Product'>
        <img src={img2}alt=""/>
        <h3 className='price'>Price:3000</h3>
        <div className='button'>
            <button onClick={additem}>Add Cart</button>
            <button>Buy Now</button>

        </div>

        </div>
        <div className='Product'>
        <img src={img3} alt=""/>
        <h3 className='price'>Price:5000</h3>
        <div className='button'>
            <button onClick={additem}>Add Cart</button>
            <button>Buy Now</button>

        </div>
        </div>
        <div className='Product'>
        <img src={img4} alt=""/>
        <h3 className='price'>Price:5000</h3>
        <div className='button'>
            <button onClick={additem}>Add Cart</button>
            <button>Buy Now</button>

        </div>

        </div>
        <div className='Product'>
        <img src={img5} alt=""/>
        <h3 className='price'>Price:5000</h3>
        <div className='button'>
            <button onClick={additem}>Add Cart</button>
            <button>Buy Now</button>

        </div>

        </div>
        <div className='Product'>
        <img src={img6} alt=""/>
        <h3 className='price'>Price:5000</h3>
        <div className='button'>
            <button onClick={additem}>Add Cart</button>
            <button>Buy Now</button>

        </div>

        </div>
    </div>
    <h5 className='cart-item'>Cart-Items:{item}</h5>
    
    </div>
  )
}


export default React.memo(Cart)