import "./Gallery.css";

export default function Gallery() {
  return (
    <div className="app-wrapper">
      <div className="mobile-screen">

        {/* HEADER */}
        <div className="header">
          <h1>GRASAP PROPERTIES</h1>
          <p>Bangalore</p>
        </div>

        {/* IMAGE SECTION */}
        <div className="image-section">
          <img src="/bghome.jpg" alt="Property" />
        </div>

        {/* INFO ROW */}
        <div className="info-row">
          <div>₹85L+</div>
          <div>2026</div>
          <div>2 BHK</div>
          <div>3 BHK</div>
        </div>

        {/* DESCRIPTION */}
        <div className="desc">
          Premium luxury apartments with modern amenities, prime location and great connectivity.
        </div>

        {/* BUTTONS */}
        <div className="btn-row">
          <button className="btn">Download</button>
          <button className="btn outline">Project Details</button>
        </div>

        {/* BOTTOM NAV */}
         <div className="bottom-nav">

          <div className="nav-item active">
            <i className="fa-solid fa-house"></i>
          </div>

          <div className="nav-item">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          <div className="nav-item">
            <i className="fa-solid fa-bars"></i>
          </div>

        </div>

      </div>
    </div>
  );
}