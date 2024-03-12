// import { useState } from 'react';

// Set states
// const [isActive, setIsActive] = useState(false);

function Navbar() {
  return (
    <nav className="flex justify-evenly">
      <a href="#home">Home</a>
      <a href="#projects">Projects</a>
      <a href="#services">Services</a>
      <a href="#home">Logo</a>
      <a href="#questions">FAQs</a>
      <a href="#team">Our Team</a>
      <a href="#contact">Contact Us</a>
    </nav>
  );
}

export default Navbar;
