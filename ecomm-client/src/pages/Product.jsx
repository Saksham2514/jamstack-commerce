import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../gqloperations/queries'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BACKEND_URL } from './Helpers';
import {useCart} from 'react-use-cart'


const Product = () => {
  const {addItem} = useCart()
  const {id} = useParams()
  const {loading,error,data} = useQuery(getProductById,{
    variables:
    {productId:id}})

  if(loading) return <h1>Loading....</h1>
  
  if(error) console.log(error);
   
    const {description,name,price } = data.product.data.attributes
    const img_data = data.product.data.attributes.image.data
    console.log() ;
      const addToCart = () =>{
        addItem({
          id:id,
          name:name,
          price:price,
          img:`${BACKEND_URL}${img_data[0].attributes.url}`
        })
      }
  return (
    
    <div className='row' style={{margin:"1rem"}}>
      <div className='col m6 s12'>
      <Carousel showThumbs={false} infiniteLoop autoPlay >
            {img_data.map(({attributes},i)=>(
              <div>
                <img src={`${BACKEND_URL}${attributes.url}`} alt="" />
              </div>
              
              ))}
        </Carousel>

      </div>
      <div className='col m6 s12'>
        <h2>{name}</h2>
        <h5 className='green-text'>${price}</h5>
        <p>{description}</p>
        <button className="btn blue" onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  
  )
}

export default Product
