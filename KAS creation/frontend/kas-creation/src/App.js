import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import {Route,BrowserRouter,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/home';
import Login from './components/Login';
function App() {
return (
  <div classApp="App">
    <Navbar/>
    {/* <Home/> */}
  
    <Footer/>
    <BrowserRouter>
        <Routes>
            <Route path='/home' Component={Home}/>
            <Route path='/Login' Component={Login}/>
        </Routes>
    </BrowserRouter>
  </div>
  
  
 );
}

export default App;
