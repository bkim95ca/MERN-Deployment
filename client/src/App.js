import './App.css';
import {Link, Route, Routes, Navigate} from 'react-router-dom'
import AllPets from './components/AllPets';
import OnePet from './components/OnePet';
import NewPet from './components/NewPet';
import EditPet from './components/EditPet';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* All Pets */}
        <Route path='/pets' element={<AllPets/>}/>

        {/* New Pet */}
        <Route path='/pet/new' element={<NewPet />} />

        {/* View Pet */}
        <Route path='/pet/:id' element={<OnePet/>} />

        {/* Edit Pet */}
        <Route path='/pet/:id/edit' element={<EditPet/>} />

        {/* For all other pages, go back to home */}
        <Route path='*' element={<Navigate to="/pets" replace/>} />

      </Routes>
    </div>
  );
}

export default App;
