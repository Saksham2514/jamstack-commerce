import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { getAllProducts } from '../gqloperations/queries'
import Card from '../components/Card'
import Search from '../components/Search'
import Pagination from '../components/Pagination'
export const Home = () => {
  const [page, setPage] = useState(1)
    const {loading,error,data} = useQuery(getAllProducts,{
      variables:{
        "pagination": {
          "page": page,
          "pageSize": 8
        }}
    })
    if(loading) return (<h1>Loading...</h1>)

    if(data) console.log(data)
    if(error) console.log(error)

  return (
    <div>
        <Search/>
        <div className='homeroot'>

            {data.products.data.map(({id,attributes}) => {
                return <Card  key={id} id={id} name={attributes.name} price={attributes.price} image={attributes.image.data[0].attributes.url} description={attributes.description}/>
            })}
        </div>
        <Pagination pageCount={data.products.meta.pagination.pageCount} setPage={setPage} />
    </div>
  )
}
