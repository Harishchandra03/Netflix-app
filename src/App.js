

import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/sign-up";
import Account from "./pages/account";

import ProtectedRoute from "./Components/protected-route";
import { AuthContextProvider}  from "./Context/auth-context";



function App() {
  return (
    <>

      <AuthContextProvider>
        <Navbar></Navbar>
        <Routes>

          <Route path="/" element={<Home></Home>} />
          <Route path='/login' element={<Login></Login>} />
          <Route path='/signup' element={<Signup></Signup>} />
          <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
        </Routes>

      </AuthContextProvider>



    </>
  );
}

export default App;
