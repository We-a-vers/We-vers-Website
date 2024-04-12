import Navbar from './Components/navbar';
import LandingPage from './pages/Landing/landing_page';
import Footer from './Components/footer';

function App() {
  return (
    // <>test</>
    <div>
      <Navbar />
      <section id="home">
        <LandingPage />
      </section>
      <section id="home">
        <LandingPage />
      </section>

      <section id="home">
        <LandingPage />
      </section>

      <section id="home">
        <LandingPage />
      </section>

      {/* <section id = 'home'><LandingPage/></section>
      <section id = 'home'><LandingPage/></section>
      <section id = 'home'><LandingPage/></section>
      <section id = 'home'><LandingPage/></section> */}
      <Footer />
    </div>
  );
}
// For Tatsuo's commit
// FOr Joanne's change
export default App;
