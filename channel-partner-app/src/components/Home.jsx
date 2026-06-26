import "./Home.css";

export default function Home() {
  return (
    <div className="app-wrapper">

      <div className="home-screen">

        <div
          className="image-section"
          style={{ backgroundImage: "url('/bghome.jpg')" }}
        ></div>

        <div className="text-section">
          <h1>PROPERTIES</h1>
          <p>Find your dream home today</p>
        </div>

        <div className="btn-row">
          <button className="btn">Explore</button>
          <button className="btn outline">Details</button>
        </div>

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