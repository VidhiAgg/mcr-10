import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard/Dashboard';
import Department from './pages/Department/Department';
import Products from './pages/Products/Products';
import SideNavigationBar from './components/SideNavigationBar';
import AddNew from './pages/AddNewPage/AddNew';
function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <SideNavigationBar/>
     <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/departments" element={<Department/>} />
        <Route path ="/products" element={<Products/>} />
        <Route path ="/addNew" element={<AddNew/>} />

     </Routes> 
    </div>
  );
}

export default App;
