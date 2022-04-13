import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import ImageDetail from './Pages/ImageDetail';
import "./scss/reset.scss"
import {CounterProvider, ImageContextProvider, SelectedCardsProvider} from "./misc/useContext"
function App() {
  return (
    <div className='App'>
    <ImageContextProvider>
      <SelectedCardsProvider>
      <CounterProvider>

      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/image/:id" element={<ImageDetail />}/>
      </Routes>

      </CounterProvider> 
      </SelectedCardsProvider>
    </ImageContextProvider>
  
    </div>
  );
}

export default App;
