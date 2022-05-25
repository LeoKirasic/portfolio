import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Icons from './components/Icons';
import Projects from './components/Projects';
function App() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Header />
      <About></About>
      <Icons></Icons>
      <Projects></Projects>
    </div>
  );
}

export default App;
