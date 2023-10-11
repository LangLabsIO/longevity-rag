import { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./Products";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import ProductState from "./context/productState";
import Footer from "./components/Footer";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isloggedIn, setIsLoggedIn] = useState(false);
  return (
    <ProductState>
    {/* <div className={darkMode? "dark": ""}> */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} isloggedIn={isloggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Routes>
          <Route path='/' element={ <Products darkMode={darkMode}/>} />
          <Route path='/login' element={<Login isloggedIn={isloggedIn} setIsLoggedIn={setIsLoggedIn} darkMode={darkMode}/>}/>
          <Route path='/signup' element={<SignUp darkMode={darkMode}/>} />

        </Routes>
       <Footer/>

     
    {/* </div> */}
    </ProductState>
  );
}

export default App;
