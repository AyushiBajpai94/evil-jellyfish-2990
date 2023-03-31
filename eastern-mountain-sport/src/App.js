import AdminRoutes from './admin/pages/AdminRoutes';
import './App.css';
import { Navbar } from './Components/Navbar';
import Checkout from './Pages/CartPage/Checkout';




function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <AdminRoutes/>
    </div>
  );
}

export default App;
