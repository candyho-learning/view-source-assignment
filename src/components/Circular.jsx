import circularFront from "/circular-front.png";
import reactLogo from "../assets/react.svg";
import "../styles/circular.css";

export default function Circular() {
  return (
    <section className="circular">
      <div className="flip-menu centered">
        <div className="card">
          <div className="card-front centered">
            <img src={circularFront} alt="" className="circular-front" />
          </div>
          <div className="card-back centered">
            <img src={reactLogo} alt="" className="circular-back" />
          </div>
        </div>
      </div>
      <div className="circular-title">
        <h2>This Month: Local Grill Gear, Our Favorite Sunscreen</h2>
        <button className="cta-btn">Download the Circular</button>
      </div>
    </section>
  );
}
