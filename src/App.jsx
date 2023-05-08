
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {

  return (
    <BrowserRouter>
        <div className='App'>
            <NavBar/>

            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/category/:cid' element={<ItemListContainer/>}/>
              <Route path='/detail/:pid' element={<ItemDetailContainer/>}/>    
            </Routes>

        </div>
    </BrowserRouter>
  ); 
}

export default App;
