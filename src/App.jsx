import react from "react"
import Header from './Header'
import {Routes,Route} from 'react-router-dom'
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from "./Footer";



const App= ()=>{
    return(<>
        <Header/>
        <Routes>
            <Route exact="true" path="/" element={<Home/>} />
            <Route exact="true" path="/contact" element={<Contact/>} />
            <Route exact="true" path="/about" element={<About/>} />
            <Route exact="true" path="/services" element={<Services/>} />
            <Route exact="true" path="/about/services" element={<Services/>}/>
        </Routes>
        <Footer/>
        
    </>)
}

export default App;