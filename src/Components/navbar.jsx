/* eslint-disable react/jsx-props-no-spreading */
import { IoClose } from 'react-icons/io5';
import { React, useState, useEffect } from 'react';
import { useScroll, motion, useMotionValueEvent } from 'framer-motion';
import useScreenSize from './hooks/useScreenSize.jsx';
import hamburger from '../assets/Navbar/Icon.svg';

const NAVITEMS = [
  { href: '#home', title: 'Home' },
  { href: '#projects', title: 'Projects' },
  { href: '#services', title: 'Services' },
  { href: '#questions', title: 'FAQs' },
  { href: '#team', title: 'Our Team' },
  { href: '#contact', title: 'Contact Us' },
];

function NavItem({ href, title }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li
      className={`flex justify-center w-full ${isOpen && 'border-t-2 border-solid py-4'}`}
    >
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        <a href={href}>{title}</a>
      </button>
    </li>
  );
}

function Navbar() {
  const [expand, setExpand] = useState(true);
  const screenSize = useScreenSize();
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latestScrollY) => {
    const previous = scrollY.getPrevious();
    if (latestScrollY > previous && latestScrollY > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    setExpand(screenSize.width >= 800);
  }, [screenSize]);

  return (
    <motion.header
      className="sticky top-0 bg-white"
      variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      {!isOpen ? (
        <nav className="py-12 border-2">
          {expand ? (
            <ul className="flex flex-row text-xl font-bold font-['Inter'] text-navWords justify-evenly items-center">
              {NAVITEMS.map((item) => (
                <NavItem key={item.href} {...item} setIsOpen={setIsOpen} />
              ))}
            </ul>
          ) : (
            <div className="flex flex-row justify-between px-[2rem]">
              <h2>Weavers Logo</h2>
              <button type="button" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <IoClose style={{ fontSize: '2em' }} />
                ) : (
                  <img
                    src={hamburger}
                    alt="Hamburger"
                    className="justify-end"
                  />
                )}
              </button>
            </div>
          )}
        </nav>
      ) : (
        <nav className="w-full h-dvh z-50 fixed inset-0 bg-gray-700 bg-opacity-80">
          <ul className="flex flex-col font-normal font-['Inter'] text-lg bg-white rounded-md justify-center items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="navBtn"
              className="self-end px-4 p-4"
            >
              <IoClose style={{ fontSize: '2em' }} />
            </button>
            {NAVITEMS.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </ul>
        </nav>
      )}
    </motion.header>
  );
}

export default Navbar;
