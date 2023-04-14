import { Route, Routes } from 'react-router-dom';
import Product from "./Products";
import './App.css';

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path='/' element={<Product/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
