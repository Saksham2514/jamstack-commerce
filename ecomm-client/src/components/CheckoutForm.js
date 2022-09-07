import React, { useState } from 'react'
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,

  useStripe,
  Elements,
  useElements,
} from '@stripe/react-stripe-js';
import {useCart  } from 'react-use-cart';
import {BACKEND_URL} from '../pages/Helpers'

const CheckoutForm = () => {

  const {cartTotal,items,emptyCart} = useCart()


  const stripe = useStripe();
  const elements = useElements();

  const [formData ,setFormData] = useState([])
  const [payBtn ,setPayBtn] = useState(false)
  const [error ,setError] = useState(false)
  const [paymentProcessing, setPaymentProcessing] = useState(false)
  const handleChange = (e) =>{
    setFormData({...formData , [e.target.name] : e.target.value})
  }
 const makePaymentRequest  = async (allFormData) =>{
      try {
        const res = await fetch (`${BACKEND_URL}/api/orders`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        },
          body:JSON.stringify(allFormData)
        })
        return res.json()
        
      } catch (error) {
        setError(true)
      }
    }
    

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (elements == null) {
      return;
    }

    const payload = await stripe.createToken(elements.getElement(CardElement));
    
    const allFormData = {
      ...formData,
      token:payload.token.id,
      amount:cartTotal,
      items:items,
      user:atob(localStorage.getItem('e'))
    }
    // console.log(allFormData);
    setPaymentProcessing(true)
    
    await makePaymentRequest(allFormData)
    setPaymentProcessing(false)
    emptyCart()
    
    
  };
  
  if (error)  {return (
     <span className='card-panel red '>Payment failed</span> 
  )}
  if (paymentProcessing)  {return (
    <span className="spinner-layer spinner-green">
      <span className="circle-clipper left">
        <span className="circle"></span>
      </span>
      <span className="gap-patch">
        <span className="circle"></span>
      </span>
      <span className="circle-clipper right">
        <span className="circle"></span>
      </span>
    </span>
  
      ) }
  
  
  return (
    <form onSubmit={handleSubmit}>
      
      <h2>Shipping details</h2>
      <input type="text" placeholder='Shipping Address' onChange={handleChange} required name='shippingAddress' className=''/>
      <input type="text" placeholder='Enter City' onChange={handleChange} required name='city' className=''/>
      <input type="text" placeholder='State' onChange={handleChange} required name='state' className=''/>
      <input type="number" placeholder='PinCode' onChange={handleChange} required name='pin' className=''/>
      
      <CardElement onChange={(e)=>{
        e.complete? setPayBtn(true):setPayBtn(false) 
      }}/>
      <button style={{marginTop:"1rem"}} className='blue btn ' type="submit" disabled={(!stripe || !elements)  || !payBtn}>
        Pay
      </button>
    </form>
  );
};

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`);

const Checkout = () =>(
  <Elements stripe={stripePromise}>
    <CheckoutForm/>
  </Elements>
)

export default Checkout
