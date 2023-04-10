import './App.css';
import { Suspense } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import renderRoutes from './routes';
import "./../node_modules/slick-carousel/slick/slick.css"; 
import "./../node_modules/slick-carousel/slick/slick-theme.css";


function App() {
  return (
   <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <Routes>
        {renderRoutes()}
      </Routes>
    </BrowserRouter>
   </Suspense>
  );
}

export default App;
