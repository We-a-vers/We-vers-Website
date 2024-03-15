// import { useState } from 'react';

// Set states
// const [isActive, setIsActive] = useState(false);

function Navbar() {
  return (
    <div>
      <nav className="py-5">
        <ol className="flex w-full justify-evenly text-xl font-bold font-['Inter'] text-navbarWords leading-tight tracking-wide">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#home">Logo</a>
          </li>
          <li>
            <a href="#questions">FAQs</a>
          </li>
          <li>
            <a href="#team">Our Team</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Navbar;
