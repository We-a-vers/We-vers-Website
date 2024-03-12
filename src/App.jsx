import Navbar from './components/Navbar.jsx';

function App() {
  return (
    // <>test</>
    <div>
      <Navbar />
      <div id="dummy">
        <ol>
          <li id="home">Home</li>
          <li id="projects">Projects</li>
          <li id="services">Services</li>
          <li id="questions">FAQs</li>
          <li id="team">Our Team</li>
          <li id="contact">Contact Us</li>
        </ol>
      </div>
    </div>
  );
}
// For Tatsuo's commit
export default App;
