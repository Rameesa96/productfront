import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Navbar from '../../Components/Navbar'
import { useLocation ,Link} from 'react-router-dom'
import CustomizedTables from '../../Components/Table'
import Categorynot from '../categorynotfound/Categorynot'
function Allproducts() {
    const location =useLocation()
    const id=location.pathname.split("/")[2]
    const[product,setProduct]=useState('')
    useEffect(()=>{
      axios.get(`https://ecommerce11.adaptable.app/product/getbycategory/${id}`).then((response)=>{
        setProduct(response.data)
       
      },[])
      
      
        },[])
  return (
    <div className='allcategories'>
    <Navbar/>
    <div className='subcate'>
      

    {(product!='')?<div className='table'> 
<CustomizedTables className="tablecontent" products={product}/>
</div>:<div ><Categorynot data={"No Product Available"}/></div>}  
    </div>
   
  </div>
  )
}

export default Allproducts