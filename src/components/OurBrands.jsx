import BrandGroup from "./BrandGroup";
const brands = Array.from({ length: 5 }, (v, _) => "Lorem Ipsum");
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const brandCounts = [
  5, 7, 9, 7, 5, 5, 3, 7, 5, 3, 7, 5, 9, 3, 7, 5, 3, 7, 5, 9, 3, 5, 7, 3, 7, 5,
];

console.log(brandCounts.length);

export default function OurBrands() {
  return (
    <section className="our-brands">
      <h3 className="our-brands-title">Our Brands</h3>
      <div className="brand-group-wrapper">
        {alphabet.split("").map((letter, i) => (
          <BrandGroup
            key={letter}
            title={letter}
            brandsArr={Array.from(
              { length: brandCounts[i] },
              (v, _) => "Lorem Ipsum"
            )}
          />
        ))}
      </div>
    </section>
  );
}
