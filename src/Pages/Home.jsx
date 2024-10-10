import Intro from '../Components/Intro'
import About from '../Components/About'
import Services from '../Components/Services'
import Gallery from '../Components/Gallery'
import Testimonials from '../Components/Testimonials'
import Contact from '../Components/Contact'

function Home() {
  return (
    <>
      <Intro />
      <main id="main">
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
export default Home;
