import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
    const location = useLocation();

    return (
        <div className="flex min-h-screen flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
            <Navbar />

            <div className="flex-1">
                <AnimatePresence mode = "wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />}/>

                        <Route 
                            path="/products/:id"
                            element={<ProductDetails />}
                        />

                        <Route path="/about" element={<About/>} />
                        <Route path="/contact" element={<Contact />}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/signup" element={<Signup />}/>
                    </Routes>
                </AnimatePresence>
            </div>

            <Footer />
             
        </div>
    );
}