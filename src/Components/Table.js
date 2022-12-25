import Table from 'react-bootstrap/Table';

function BasicExample(props) {
    console.log(props.products)
  return (
    <Table striped bordered hover style={{backgroundColor:"white"}}>
        
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>title</th>
          
        </tr>
      </thead>
      <tbody>
       {props.products && Array.from(props.products).map((item,index)=>{return(<tr>
          <td>{index+1}</td>
          <td>{item.Name}</td>
          <td>{item.Price}</td>
          <td>{item.childcategory}</td>
         
        </tr>)})} 
        
        
      </tbody>
    </Table>
  );
}

export default BasicExample;