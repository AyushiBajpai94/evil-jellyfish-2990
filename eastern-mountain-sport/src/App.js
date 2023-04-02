import AdminRoutes from './admin/pages/AdminRoutes';
import './App.css';
import Homepage from './Pages/HomePage';

import { AllRoutes } from './Pages/AllRoutes';

import Login from './Pages/Login';
import Register from './Pages/RegisterPage';
import AuthDetails from './Pages/AuthDetail';
import MainRoute from './Components/MainRoute';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import CartPage from './Pages/CartPage/CartPage';


function App() {
  return (
    <div className="App">
    
      <AllRoutes/>
      
      <AdminRoutes/>
      
    </div>
  );
}

export default App;

