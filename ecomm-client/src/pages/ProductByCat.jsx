import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_PRODUCT_BY_CATEGORIES } from '../gqloperations/queries'
import Card from '../components/Card'
import { useParams } from 'react-router-dom'

export const ProductByCat = () => {
    
    const {cid} = useParams()

    const {loading,error,data} = useQuery(GET_PRODUCT_BY_CATEGORIES,{
        variables:{
            categoryId:cid
        }
    })

    if(loading) return (<h1>Loading...</h1>)

    if(error) console.log(error)
    if(data) console.log(data)

  return (
    <div>
 
    </div>
  )
}
