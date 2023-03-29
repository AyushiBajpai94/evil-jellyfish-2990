import logo from './logo.svg';
import './App.css';
import Navbar from './admin/components/AdminNavbar';
import AdminRoutes from './admin/pages/AdminRoutes';

function App() {
  return (
    <div className="App">
      <AdminRoutes/>
    </div>
  );
}

export default App;
