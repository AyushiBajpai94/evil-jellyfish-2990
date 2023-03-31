import AdminRoutes from './admin/pages/AdminRoutes';
import './App.css';
import { Navbar } from './Components/Navbar';
import Homepage from './Pages/HomePage';
import Checkout from './Pages/CartPage/Checkout';

function App() {
  return (
    <div className="App">
      <Homepage/>
      {/* <AdminRoutes/> */}
    </div>
  );
}

export default App;

