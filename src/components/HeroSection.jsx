import heroLogo from "/hero-logo.png";

export default function HeroSection() {
  return (
    <div className="hero">
      <h4>
        434 6th ST
        <br /> GREENWICH
        <br />
        VILLAGE
      </h4>
      <img
        src={heroLogo}
        alt="The Locavore Variety Store logo"
        className="hero-logo"
      />
      <h4>
        OPEN DAILY
        <br />
        10am-7pm
      </h4>
    </div>
  );
}
