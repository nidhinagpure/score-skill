import { createRoot } from 'react-dom/client';
import './style.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  <div>
    <BrowserRouter>
       <App />
  </BrowserRouter>

  </div>
    
  
)
