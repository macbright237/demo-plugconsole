import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth_pages/Login";
import Signup from "./pages/auth_pages/Signup";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SplashScreen from "./pages/SplashScreen";
import ForgotPassword from "./pages/auth_pages/ForgotPassword";
import UpdatePassword from "./pages/auth_pages/UpdatePassword";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<SplashScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/update_password" element={<UpdatePassword />} />
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    <ToastContainer />
  </React.StrictMode>
);
