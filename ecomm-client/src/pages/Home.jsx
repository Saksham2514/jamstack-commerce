import React from 'react'
import { useQuery } from '@apollo/client'
import { getAllProducts } from '../gqloperations/queries'
import Card from '../components/Card'
export const Home = () => {
    const {loading,error,data} = useQuery(getAllProducts)
    if(loading) return (<h1>Loading...</h1>)

    // if(data) console.log(data)
    if(error) console.log(error)

  return (
    <div>
        
        <div className='homeroot'>
            {data.products.data.map(({id,attributes}) => {
                return <Card  key={id} id={id} name={attributes.name} price={attributes.price} image={attributes.image.data[0].attributes.url} description={attributes.description}/>
            })}
        </div>
    </div>
  )
}
