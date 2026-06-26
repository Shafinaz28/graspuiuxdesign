import React, { useState } from 'react';
import './bookings.css';

export default function Bookings() {
  const [activeTab, setActiveTab] = useState('mumbai');

  return (
    <div className="app-wrapper">
      {/* Fixed: Class changed from mobile-viewport to mobile-screen to pair with CSS */}
      <div className="mobile-screen">
        
        {/* TOP BAR */}
        <div className="top-bar">
          <button className="back-btn">
            <i className="fa-solid fa-chevron-left"></i>
            <span>Back</span>
          </button>
          <button className="msg-btn">
            <i className="fa-regular fa-envelope"></i>
          </button>
        </div>

        {/* SCREEN TITLE */}
        <div className="screen-title-section">
          <h2>MY BOOKINGS</h2>
        </div>

        {/* FILTER DROPDOWNS */}
        <div className="filters-container">
          <div className="dropdown-field">
            <select defaultValue="2019-2020">
              <option value="2019-2020">2019 - 2020</option>
              <option value="2020-2021">2020 - 2021</option>
            </select>
            <i className="fa-solid fa-chevron-down field-arrow"></i>
          </div>

          <div className="dropdown-field">
            <select defaultValue="q3">
              <option value="q3">01 Oct 2019 - 31 Dec 2019</option>
              <option value="q4">01 Jan 2020 - 31 Mar 2020</option>
            </select>
            <i className="fa-solid fa-chevron-down field-arrow"></i>
          </div>
        </div>

        {/* SUMMARY HEADER */}
        <div className="summary-total">
          Total : <span className="highlight-count">43</span> <span className="highlight-amount">(₹ 38.08 Cr)</span>
        </div>

        {/* REGION TABS */}
        <div className="region-tabs">
          

          <div 
            className={`tab-card ${activeTab === 'ncr' ? 'active' : ''}`}
            onClick={() => setActiveTab('ncr')}
          >
            <h3>NCR</h3>
            <p className="booking-count">22 Bookings</p>
            <p className="booking-value">₹ 16.21 Net BV (Cr)</p>
          </div>
        </div>

        {/* PROJECT LISTINGS AREA */}
        <div className="projects-scroll-area">
          
          {/* PROJECT CARD 1 (EXPANDED) */}
          <div className="project-card expanded">
            <div className="project-header">
              <div className="project-meta">
                <h4>Grasap Emerald</h4>
                <span className="sub-count">| 1 Bookings | ₹ 0.77 (Cr) Net BV</span>
              </div>
              <i className="fa-solid fa-xmark close-icon"></i>
            </div>
            
            {/* EXPANDED INNER DETAILS */}
            <div className="inner-detail-card">
              <div className="detail-row">
                <span className="client-name">Ms. Relika Shah</span>
                <span className="property-value">₹ 76.90 Lakhs</span>
              </div>
              <div className="detail-row status-line">
                <span className="status-percent">Realized : 90.16 %</span>
                <span className="reg-date">Reg. Date : 12 Dec 2019</span>
              </div>
            </div>
          </div>

          {/* PROJECT CARD 2 (COLLAPSED) */}
          <div className="project-card collapsed">
            <div className="project-summary-line">
              <h4>Grasap Nest</h4>
              <div className="right-side">
                <span className="booking-badge">8 Bookings</span>
                <i className="fa-solid fa-chevron-right link-arrow"></i>
              </div>
            </div>
          </div>

          {/* PROJECT CARD 3 (COLLAPSED) */}
          <div className="project-card collapsed">
            <div className="project-summary-line">
              <h4>Grasap Nirvaan</h4>
              <div className="right-side">
                <span className="booking-badge">2 Bookings</span>
                <i className="fa-solid fa-chevron-right link-arrow"></i>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM NAV */}
        <div className="bottom-nav">
          <div className="nav-item">
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