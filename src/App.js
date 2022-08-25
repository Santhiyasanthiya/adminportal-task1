import logo from "./logo.svg";
import "./css/sb-admin-2.min.css";
import Dashboard from "./Dashboard";
import Users from "./Users";
import Createuser from "./Createuser";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./Product";
import Login from "./Login";
import Portal from "./Portal";
import CreateProduct from "./CreateProduct";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="create-users" element={<Createuser />} />
          <Route path="products" element={<Product/>} />
          <Route path="create-product" element={<CreateProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
