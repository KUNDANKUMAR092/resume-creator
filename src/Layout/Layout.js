import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './../common/Header/Header';
import Home from './../components/Home/Home';
import Contact from "./../components/Contact/Contact";
import About from "./../components/About/About";
// import NoPage from "./../common/NoPage/NoPage";
import Login from "./../LoginSignUp/Login/Login";


function Layout() {
    return ( 
        <>
            {window.location.pathname !== "/login" ?  
                <header className="App-header">
                    <Header />
                </header>
            : null}
            <div className='main_container'>
                <BrowserRouter>
                    <Routes>
                        <Route path="/home" index element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        {/* <Route path="*" element={<Home />} /> */}
                        <Route path="login" element={<Login />} />
                        <Route path="/edit/home" index element={<Home />} />
                        <Route path="/edit/about" element={<About />} />
                        <Route path="/edit/contact" element={<Contact />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
     );
}

export default Layout;