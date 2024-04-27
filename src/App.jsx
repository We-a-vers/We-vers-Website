import Navbar from './Components/navbar.jsx';
import LandingPage from './pages/Landing/landing_page.jsx';
import Footer from './Components/footer.jsx';
import MemberPage from './pages/Member/member_page.jsx';

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

      <section id="team">
        <MemberPage />
      </section>

      <section id="home">
        <LandingPage />
      </section>

      <Footer />
    </div>
  );
}
// For Tatsuo's commit
// FOr Joanne's change
export default App;
