
import { Route, Routes } from 'react-router-dom';
import Home from "./Home";
import AddEmployee from './AddEmployee';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<AddEmployee/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
