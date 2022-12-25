import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import laptop from '../../assets/laptops.webp'
import mobile from '../../assets/mobiles.jpg'
import computermobiles from '../../assets/computermobiles.jpg'
import electronic from '../../assets/electronic.jpeg'
import men from '../../assets/men.webp'
import './ALLCategories.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CustomizedTables from '../../Components/Table'
function Allcategories() {
const photos=[computermobiles,men,electronic]
const [count,setCount]=useState('')
  const [category,setCategory]=useState()
const [category1,setCategory1]=useState('')
useEffect(()=>{
  axios.get('https://ecommerce11.adaptable.app/product/category1').then(response=>{
    setCategory1(response.data)
  })
},[])
  useEffect(()=>{
axios.get('https://ecommerce11.adaptable.app/category').then((response)=>{
  setCategory(response.data)
 
},[])


  },[])
  const[product,setProduct]=useState('')
  useEffect(()=>{
    axios.get('https://ecommerce11.adaptable.app/product').then((response)=>{
      setProduct(response.data)
     
    },[])
    
    
      },[])
      useEffect(()=>{
        axios.get('https://ecommerce11.adaptable.app/product/getcount').then(response=>{
          setCount(response.data)
        })
      },[])
      
  return (
    <div className='allcategories'>
      <Navbar/>
      <h1>Total count:{count}</h1>
      <div className='maincate'>
        <div className='cards'>
        {category && Array.from(category).map((item,index)=>{return(  
        <Link to={`/sub/${item._id}/${item.Name}`}> <div class="" uk-grid>
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src={photos[index]}  alt=""/>
            </div>
            <div class="uk-card-body">
               <h3 class="uk-card-title">{item.Name}</h3>
            </div>
        </div>
        </div></Link>
        )})}
    </div>

      
        <div className='table'> 
 <CustomizedTables className="tablecontent" products={product}/>
 </div>
      </div>
     
    </div>

  )
}

export default Allcategories