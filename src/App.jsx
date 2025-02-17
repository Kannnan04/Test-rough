// eslint-disable-next-line no-unused-vars
import React from 'react';
import Bloghome from './Components/Bloghome';

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 

import Cardtwo from './Components/Cardtwo';
import Cardthree from './Components/Cardthree';
import Middlebanner from './Components/Middlebanner';
import Destination from './Components/Destination';
import Category from './Components/Category';
import Footer from './Components/Footer';
import BlogCard from './Components/Cardone';



function App() {
  

  return (
    <div>
      <Bloghome />
      <BlogCard />
      <Cardtwo />
      <Cardthree />
      <Middlebanner />
      <Destination />
      <Category />
      <Footer />
    </div>

  
  )
}

export default App
