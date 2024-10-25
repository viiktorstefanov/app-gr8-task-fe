import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Notes from './pages/Notes/Notes';
import AddNote from './pages/AddNote/AddNote';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Notes/>}/>
        <Route path='/add-note' element={<AddNote/>}/>
      </Routes>
    </div>
  );
}

export default App;
