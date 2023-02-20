import './App.css';
import Nav from './components/nav';
import AddProduct from './components/addproduct';
import Footer from './components/footer';
import Signup from './components/signup';
import Login from './components/login';
import Products from './components/products';
import Profile from './components/profile';

import Updateproduct from './components/update_product';

import PrivateComponent from './components/privatecomponent';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<Products/>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/update/:id" element={<Updateproduct/>}/>
        <Route path="/profile" element={<Profile/>}/>
        </Route>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<h1>logout component</h1>}/>

      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
