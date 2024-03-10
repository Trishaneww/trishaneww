import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'

function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>} />
      </Routes>
    </div>
    
    
    </BrowserRouter>

  );
}

export default App;
