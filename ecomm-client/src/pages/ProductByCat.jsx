import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_PRODUCT_BY_CATEGORIES } from '../gqloperations/queries'
import Card from '../components/Card'
import { useNavigate, useParams } from 'react-router-dom'

export const ProductByCat = () => {
    const {cid} = useParams();
    const navigate = useNavigate()
    const {loading,error,data} = useQuery(GET_PRODUCT_BY_CATEGORIES,{
        variables:{
            categoryId:cid
        }
    })
    if(loading) return (<h1>Loading...</h1>)

    if(data) console.log(data)
    if(error) navigate('/')

  return ( 
    
    <div>
        
        <div className='homeroot'>
            {data.category.data.attributes.products.data.map(({id,attributes}) => {
                return <Card  key={id} id={id} name={attributes.name} price={attributes.price} image={attributes.image.data[0].attributes.url} description={attributes.description}/>
            })}
        </div>
    </div>
  )
}
