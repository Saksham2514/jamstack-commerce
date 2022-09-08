import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({setPage,pageCount}) => {
    
    const pages = [...Array(pageCount).keys()]
    return (
    <div className='container'>
      {pages.map((e)=><button key={e} className='chip btn ' onClick={()=>setPage(e+1)}>{e+1}</button>
      )}
    
    </div>
  )
}

export default Pagination
