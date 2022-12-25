import logo from './logo.svg';
import './App.css';
import Allcategories from './Pages/Allcategories/Allcategories';
import { Routes, Route } from "react-router-dom";
import Subcategory from './Pages/Subcategory/Subcategory';
import Subsubcategory from './Pages/Subsub/Subsubcategory';
import Categorynot from './Pages/categorynotfound/Categorynot';
import Allproducts from './Pages/ALlproducts/allproducts';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Allcategories/>} />
          <Route path='/sub/:id/:name' element={<Subcategory/>}/>
          <Route path='/allpro/:id' element={<Allproducts/>}/>
          <Route path='/subsub/:id/:name' element={<Subsubcategory/>}/>
          <Route path='/noelement' element={<Categorynot/>}/>
      </Routes>
    </div>
  );
}

export default App;
