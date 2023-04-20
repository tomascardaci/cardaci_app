import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import NavBar from './containers/NavBar/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {

  return (
    <BrowserRouter>

      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Saludos"/>}/>
          <Route path='/categoria/:cid' element={<ItemListContainer greeting="Saludos"/>}/>
          <Route path='/detail/:pid' element={<ItemDetailContainer/>}/>  
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </div>

    </BrowserRouter>
  ); 
}

export default App;
