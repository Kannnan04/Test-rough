// eslint-disable-next-line no-unused-vars
import React from 'react';
import Bloghome from './Components/Bloghome';

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 

import BlogCard from './Components/CardOne';
import Footer from './Components/Footer';



function App() {
  

  return (
    <div>
      <Bloghome />
      <BlogCard />
      <Footer />
    </div>

  
  )
}

export default App
