import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import HeroSection from "./components/HeroSection";
import SubNav from "./components/SubNav";
import OurBrands from "./components/OurBrands";
import SubmitProducts from "./components/SubmitProducts";
import Circular from "./components/Circular";

function App() {
  return (
    <div className="homepage">
      <HeroSection />
      <SubNav />
      <section className="intro">
        <h5>
          An emporium of local goods, all grown / baked / fabricated / assembled
          / crafted / concocted / sewn / stuffed / pickled within 100 miles of
          NYC.
        </h5>
      </section>
      <Circular />
      <OurBrands />
      <SubmitProducts />
    </div>
  );
}

export default App;
