
import {createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from 'react-router-dom';
import  Post  from './Components/post'
import './App.css';
import  Home  from './Components/home'
import  PostDetails  from './Components/postDetails'
import  Login  from './Components/login'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path="/Home">
    <Route path={'/Home'} element={<Home/>} ></Route>
      <Route  path={"/Posts"} element={<Post />} />
      <Route path={"/:id"} element={<PostDetails />} />
      <Route path={"Login"} element={<Login />} />
   </Route> 
  )
)


function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
