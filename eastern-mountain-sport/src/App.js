import AdminRoutes from './admin/pages/AdminRoutes';
import './App.css';
import { AllRoutes } from './Pages/AllRoutes';

function App() {
  return (
    <div className="App">
      <AllRoutes/>
      
      <AdminRoutes/>
      
    </div>
  );
}

export default App;

