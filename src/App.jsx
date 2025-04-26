import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Tools from "./components/Tools";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/tools"
            element={authUser ? <Tools /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/cart"
            element={authUser ? <Home /> : <Navigate to="/signup" />}
          />
          <Route
            path="/about"
            element={<Home />}
          />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
