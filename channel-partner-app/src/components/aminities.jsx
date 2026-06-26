import "./aminities.css";

export default function Gallery() {
  const menuItems = [
    "Why Godrej Woods?",
    "Location & Connectivity",
    "Fitness & Well Being",
    "Green Cover",
    "Entertainment",
    "Community",
    "Compliance",
    "About Godrej Properties"
  ];

  return (
    <div className="app-wrapper">
      <div className="mobile-screen">


        {/* ACCORDION CONTENT AREA */}
        <div className="content-area">
          {menuItems.map((item, index) => (
            <div key={index} className="accordion-item">
              <span className="accordion-text">{item}</span>
              <i className="fa-solid fa-chevron-right accordion-arrow"></i>
            </div>
          ))}
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