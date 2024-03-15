import { useState, useEffect } from 'react';
import useScreenSize from './hooks/useScreenSize';

function Navbar() {
  // Set variables used to evaluate state change
  // Default to expanded; This means page assumes desktop view
  const [shouldExpand, setExpand] = useState(true);
  const screenSize = useScreenSize();

  // useEffect detects when screenSize is less than phone view to make hamburger
  useEffect(() => {
    if (screenSize.width < 360) {
      setExpand(false);
    } else {
      setExpand(true);
    }
    console.log(screenSize);
    console.log(shouldExpand);
  }, [screenSize]);

  return (
    <div>
      {shouldExpand ? (
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
      ) : (
        <h1> Hello World </h1>
      )}
    </div>
  );
}

export default Navbar;
