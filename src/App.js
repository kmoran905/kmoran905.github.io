import React from 'react';
import {createRoot} from 'react-dom/client';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//imported pages
import Nav from './nav';
import Home from './routes/home';
import About from './routes/about';
import Clothes from './routes/clothes';
import Contact from './routes/contact'; 

//Creating root
const container = document.getElementById("app");
if (container) {    
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="/"/>);
}
// <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>

function Header() {  
  return (
      <header>Refutable Clothing Inc.</header>
  );
}


function Footer() {
  return (
    <footer>Website Design and Implementation by Khyle Moran &copy; 2023</footer>
  )
}

function App() {
  return ( 
    <div className="App" id= "outer-container">
      <BrowserRouter>
        <Header></Header>
              <Nav outerContainerId={"outer-container"} pageWrapId={'page-wrap'}/>
                <div id="page-wrap">  
                    <Routes>
                      <Route exact path="/" element={<Home/>}/>
                      <Route path="/about" element={<About/>} />
                      <Route path="/clothes" element={<Clothes/>}/>
                      <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                </div>
        <Footer></Footer>
      </BrowserRouter>
      </div>

  
  );
}

export default App;
