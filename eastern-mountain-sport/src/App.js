import AdminRoutes from './admin/pages/AdminRoutes';
import './App.css';
import Homepage from './Pages/HomePage';
import Checkout from './Pages/CartPage/Checkout';
import Login from './Pages/Login';
import Register from './Pages/RegisterPage';

function App() {
  return (
    <div className="App">

      <AdminRoutes/>
     
    </div>
  );
}

export default App;

