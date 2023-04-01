import AdminRoutes from './admin/pages/AdminRoutes';
import './App.css';
import Homepage from './Pages/HomePage';
import Checkout from './Pages/CartPage/Checkout';
import { AllRoutes } from './Pages/AllRoutes';

function App() {
  return (
    <div className="App">
      {/* <Homepage/> */}
      <AllRoutes/>
      {/* <AdminRoutes/> */}
    </div>
  );
}

export default App;

