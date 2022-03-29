import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";
import Regester from "./component/Regester/Regester";
import AuthProvider from "./component/AuthProvider/AuthProvider";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import Shop from "./component/Shop/Shop";
import Login from "./component/Login/Login";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route
            path="shop"
            element={
              <PrivateRoute>
                <Shop />
              </PrivateRoute>
            }
          />
          <Route path="regester" element={<Regester />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
