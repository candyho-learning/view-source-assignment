import BrandGroup from "./BrandGroup";
const brands = Array.from({ length: 5 }, (v, _) => "Lorem Ipsum");

export default function OurBrands() {
  return (
    <section className="our-brands">
      <h3 className="our-brands-title">Our Brands</h3>
      <div className="brand-group-wrapper">
        <BrandGroup title="A" brandsArr={brands} />
        <BrandGroup title="B" brandsArr={brands} />
        <BrandGroup title="C" brandsArr={brands} />
      </div>
    </section>
  );
}
