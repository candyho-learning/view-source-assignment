import shopIcon from "/shop-icon.png";
const FORM_FIELDS = [
  {
    name: "name",
    type: "text",
    placeholder: "First and Last Name",
    required: true,
  },
  { name: "email", type: "email", placeholder: "Email", required: true },
  {
    name: "brand",
    type: "text",
    placeholder: "Brand Name",
    required: true,
  },
  { name: "location", type: "text", placeholder: "Location", required: true },
];
export default function SubmitProducts() {
  return (
    <section className="submit-products">
      <div className="left">
        <img src={shopIcon} alt="" className="shop-icon" />
        <h3>Want to be on our shelves?</h3>
        <p>
          Have questions, want recommendations, or want to tell us about a small
          business you love? Reach out! If you’re a business owner featured in
          our directory, reach out with bios, images, etc. below.
        </p>
      </div>
      <form action="" className="submit-products-form">
        {FORM_FIELDS.map((item) => (
          <input
            type={item.type}
            aria-label={item.name}
            placeholder={item.placeholder.concat(item.required ? "*" : "")}
            className="form-field"
            key={item.name}
            required={false}
          />
        ))}
        <div className="input-group">
          <label htmlFor="upload" className="upload">
            Sell Sheet or Product Catalog
            <input type="file" placeholder="Upload a File" name="upload" />
          </label>
        </div>

        <label htmlFor="">Messages*</label>

        <textarea className="inquiry"></textarea>
        <button type="submit" className="cta-btn">
          Submit
        </button>
      </form>
    </section>
  );
}
