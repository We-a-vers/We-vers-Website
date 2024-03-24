import Navbar from './components/Navbar.jsx';

function App() {
  return (
    // <>test</>
    <div>
      <Navbar />
      <div id="dummy">
        <ul className="flex flex-col">
          <li className="flex justify-center align-center h-[700px]" id="home">
            Home
          </li>
          <li
            className="flex justify-center align-center h-[700px]"
            id="projects"
          >
            Projects
          </li>
          <li
            className="flex justify-center align-center h-[700px]"
            id="services"
          >
            Services
          </li>
          <li
            className="flex justify-center align-center h-[700px]"
            id="questions"
          >
            FAQs
          </li>
          <li className="flex justify-center align-center h-[700px]" id="team">
            Our Team
          </li>
          <li
            className="flex justify-center align-center h-[700px]"
            id="contact"
          >
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
}
// For Tatsuo's commit
export default App;
