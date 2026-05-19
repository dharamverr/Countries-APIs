import "./CountryDetailShimmer.css";
export default function CountryDetailShimmer() {
  return (
    <main>
      <div className="country-detail-container">
        <div className="shimmer back-shimmer"></div>

        <div className="country-detail hight">
          <div className="image-wrapper">
            <div className="shimmer image-shimmer"></div>
          </div>

          <div className="detail-text-container">
            <div className="shimmer title-shimmer"></div>

            <div className="detail-text">
              {Array(8)
                .fill("")
                .map((_, index) => (
                  <div key={index} className="shimmer text-shimmer"></div>
                ))}
            </div>

            <div className="borders">
              <div className="shimmer border-shimmer"></div>
              <div className="shimmer border-shimmer"></div>
              <div className="shimmer border-shimmer"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
