import React from 'react';
import About from './components/About';
import Nav from './components/Nav'
import Gallery from './components/Gallery'
import ContactForm from './components/Contact';


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <ContactForm></ContactForm>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
      </main>
     
    
    </div>
  );
}

export default App;
