import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import StudyHive from './components/Projects/Studyhive'

function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/studyhive' element={<StudyHive/>} />
      </Routes>
    </div>
    
    
    </BrowserRouter>

  );
}

export default App;
