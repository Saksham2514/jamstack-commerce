import { useQuery } from '@apollo/client'
import React from 'react'
import { Link } from 'react-router-dom'
import { getCategories } from '../gqloperations/queries'

export const Category = () => {
    const {data,loading,error} = useQuery(getCategories)
    
    if (loading) return <h1>Loading...</h1>
    
    if (error) console.log(error);

  return (
    <div className='category'>
        {data.categories.data.map(({id,attributes})=>(
            <Link key={id}  to={`/category/${id}`} className='chip btn white'>{attributes.Name}</Link>
        ))}    

    </div>
  )
}
