const NAV_ITEMS = [
  { name: "About", link: "#" },
  { name: "Our Brands", link: "#" },
  { name: "This Month", link: "#" },
  { name: "Submit Products", link: "#" },
];

export default function SubNav() {
  return (
    <nav>
      <ul className="subnav">
        {NAV_ITEMS.map((item) => (
          <a key={item.name}>
            <li>{item.name}</li>
          </a>
        ))}
      </ul>
    </nav>
  );
}
