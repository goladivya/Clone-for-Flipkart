

// components
import Header  from './components/header/header';
import Home from './components/home/home';
import DataProvider from './context/dataprovider';
import DetailView from './components/details/detailView';
import Cart from './components/cart/Cart';

import { Box } from '@mui/material';
import {BrowserRouter,Routes ,Route}from 'react-router-dom';

function App() {
  return (
    <DataProvider className="App">
      <BrowserRouter>
        <Header/>
        <Box style = {{marginTop : 54}}>
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/product/:id' element = {<DetailView/>}/>
            <Route path = '/cart' element = {<Cart/>}/>
          </Routes>  
        </Box>
      </BrowserRouter>  
    </DataProvider>
  );
}

export default App;
