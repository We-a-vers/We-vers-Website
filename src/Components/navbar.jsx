import { IoClose } from 'react-icons/io5';
import { useState, useEffect } from 'react';
import useScreenSize from './hooks/useScreenSize';
import hamburger from '../assets/Navbar/Icon.svg';

function Navbar() {
  // Set variables used to evaluate state change
  // Default to expanded; This means page assumes desktop view
  const [shouldExpand, setExpand] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const screenSize = useScreenSize();

  // useEffect detects when screenSize is less than phone view to make hamburger
  useEffect(() => {
    if (screenSize.width < 360) {
      setExpand(false);
    } else {
      setExpand(true);
    }
  }, [screenSize]);

  return (
    <header className="py-[1.625rem]">
      <nav className="py-5">
        {shouldExpand ? (
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
        ) : (
          <div className="flex flex-row justify-between px-[2rem]">
            <h2>Weavers Logo</h2>
            {!isOpen && (
              <button type="button" onClick={() => setIsOpen(true)}>
                <img src={hamburger} alt="Hamburger" className="justify-end" />
              </button>
            )}
            {isOpen && (
              <button type="button" onClick={() => setIsOpen(false)}>
                <IoClose style={{ fontSize: '2em' }} />
              </button>
            )}
          </div>
        )}
      </nav>

      {isOpen && (
        <ul className="flex flex-col font-normal font-['Inter'] text-lg leading-6">
          <li className="flex justify-center py-[0.5rem] px-[0.75rem]">
            <button type="button" onClick={() => setIsOpen(false)}>
              <a href="#home">Home</a>
            </button>
          </li>
          <li className="flex flex-col justify-center py-[0.5rem]">
            <hr className="solid " />
          </li>
          <li className="flex justify-center py-[0.5rem] px-[0.75rem]">
            <button type="button" onClick={() => setIsOpen(false)}>
              <a href="#projects">Projects</a>
            </button>
          </li>
          <li className="flex flex-col justify-center py-[0.5rem]">
            <hr className="solid " />
          </li>
          <li className="flex justify-center py-[0.5rem] px-[0.75rem]">
            <button type="button" onClick={() => setIsOpen(false)}>
              <a href="#services">Services</a>
            </button>
          </li>
          <li className="flex flex-col justify-center py-[0.5rem]">
            <hr className="solid " />
          </li>
          <li className="flex justify-center py-[0.5rem] px-[0.75rem]">
            <button type="button" onClick={() => setIsOpen(false)}>
              <a href="#questions">FAQs</a>
            </button>
          </li>
          <li className="flex flex-col justify-center py-[0.5rem]">
            <hr className="solid " />
          </li>
          <li className="flex justify-center py-[0.5rem] px-[0.75rem]">
            <button type="button" onClick={() => setIsOpen(false)}>
              <a href="#team">Our Team</a>
            </button>
          </li>
          <li className="flex flex-col justify-center py-[0.5rem]">
            <hr className="solid" />
          </li>
          <li className="flex justify-center py-[0.5rem] px-[0.75rem]">
            <button type="button" onClick={() => setIsOpen(false)}>
              <a href="#contact">Contact Us</a>
            </button>
          </li>
          <li className="flex flex-col justify-center py-[0.5rem]">
            <hr className="solid" />
          </li>
        </ul>
      )}
    </header>
  );
}

export default Navbar;
