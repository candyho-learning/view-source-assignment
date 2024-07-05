export default function BrandGroup({ title, brandsArr }) {
  return (
    <div className="brand-group">
      <h5 className="brand-group-title">{title}</h5>
      <div className="brand-names">
        {brandsArr.length > 0 &&
          brandsArr.map((item) => <p className="brand-name">{item}</p>)}
      </div>
    </div>
  );
}
