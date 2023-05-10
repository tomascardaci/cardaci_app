
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { CartContextProvider } from './context/CartContext';
import CartContainer from './components/CartContainer/CartContainer';

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
          <div className='App'>
              <NavBar/>
              <div className="AppBody">
                <Routes>
                    <Route path='/' element={<ItemListContainer/>}/>
                    <Route path='/category/:cid' element={<ItemListContainer/>}/>
                    <Route path='/detail/:pid' element={<ItemDetailContainer/>}/>
                    <Route path='/cart' element={<CartContainer/>}/>
                </Routes>
              </div>
          </div>
      </BrowserRouter>
    </CartContextProvider>
  ); 
}

export default App;
