import React,{useEffect,useState}from 'react'
import laptop from '../../assets/laptops.webp'
import mobile from '../../assets/mobiles.jpg'
import cases from '../../assets/cases.webp'
import Navbar from '../../Components/Navbar'
import CustomizedTables from '../../Components/Table'
import mobileaccess from '../../assets/mobileaccesssories.webp'
import { Link, useLocation } from 'react-router-dom';
import './Subcategory.css'
import axios from 'axios'
import Categorynot from '../categorynotfound/Categorynot'
function Subcategory() {
    const[product,setProduct]=useState('')
  
    const photos=[mobile,mobileaccess,laptop]
    const [subcategory,setSubcategory]=useState('')
    const location =useLocation()
    const id=location.pathname.split("/")[2]
    const name=location.pathname.split("/")[3]
    useEffect(()=>{
        axios.get(`https://ecommerce11.adaptable.app/category/subcategory/${id}`).then(response=>{
          setSubcategory(response.data)
         
        })
        
          },[])
          useEffect(()=>{
            axios.get(`https://ecommerce11.adaptable.app/product/category/${name}`).then((response)=>{
              setProduct(response.data)
             
            },[])
            
            
              },[])
          console.log(subcategory)
  return (
    
   <div className='subcategories'>
      <Navbar/>
      <div className='subcate' >
      {(subcategory!='')?<><div className='cards'>
      {subcategory && Array.from(subcategory).map((item,index)=>{return(<> <Link to={`/subsub/${item._id}/${item.Name}`}> <div  uk-grid>
        <div class="uk-card uk-card-default" style={{backgroundColor: ' rgb(72, 200, 226)', color: 'white'}}>
           
            <div class="uk-card-body">
               <h3 class="uk-card-title">{item.Name}</h3>
            </div>
        </div>
        
        </div></Link> </>)})}  
  
        </div>
        <div className='table'> 
 <CustomizedTables className="tablecontent" products={product}/>
 </div></>:<div ><Categorynot data={"Category not Found"}/></div>}  
     
       
      
       


      </div>
    </div>

  )
}

export default Subcategory