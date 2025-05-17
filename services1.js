import './services1.css';
import myImage from '../src/img/WhatsApp Image 2025-03-26 at 18.48.47.jpeg';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import myImage6 from '../src/img/facebook.avif';
import myImage7 from '../src/img/twitter.avif';
import myImage8 from '../src/img/youtube.avif';
import myImage12 from '../src/Screenshot_20250202-231103_Chrome.jpg';
import myImage11 from '../src/Screenshot_20250131-144623_Chrome.jpg';
import myImage13 from '../src/Screenshot_20250202-231801_Chrome.jpg';
import myImage14 from '../src/Screenshot_20250213-155641_One UI Home.jpg';
import myImage15 from '../src/Screenshot_20250215-204203_Samsung Notes.jpg';
import myImage16 from '../src/photo-1451976426598-a7593bd6d0b2.jpeg';
import myImage9 from '../src/img/Gemini_Generated_Image_pgskhtpgskhtpgsk.jpeg';
import React, { useEffect } from 'react';
import $ from 'jquery';

function Services() {
  const navigate = useNavigate();

  useEffect(() => { 
    $('#searchBtn').on('click', function () {
        const query = $('#searchInput').val().trim();
        if (!query) return;
  
        $('mark.highlighted').each(function () {
          $(this).replaceWith($(this).text());
        });
  
        const regex = new RegExp(`(${query})`, 'gi');
  
        $('body *').contents().each(function () {
          if (this.nodeType === 3 && this.nodeValue.match(regex)) {
            const newHTML = this.nodeValue.replace(regex, '<mark class="highlighted">$1</mark>');
            $(this).replaceWith(newHTML);
          }
        });
      });
 }, []);



  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light text-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src={myImage9}
              alt="M&B Remodeling"
              className="mr-2"
              style={{ height: '40px' }}
            />
            <h1>Smart-City Management System</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/Work">Work</Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/">123-4567-890</Link>
              </li>
              {/* 🔍 Search Input Section */}
              <li className="nav-item" id='search' style={{ textAlign: 'center' }}>
                <input
                  type="text"
                  id="searchInput"
                  placeholder="Enter..."
                  style={{ padding: '2px', width: '70px', fontSize: '10px' }}
                />
                <button
                  id="searchBtn"
                  style={{ padding: '2px 2px', fontSize: '10px' }}
                >
                  Search
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-C1">
        <h1>Our Services</h1>
        <p>Let us help you make your dreams a reality.</p>
      </div>

      <div className="container-C2">
        <div className="D-1">
          
              <img src={myImage11} alt="M&B Remodeling" className="mx-2" />
              <img src={myImage12} alt="M&B Remodeling" className="mx-2" />
              <img src={myImage13} alt="M&B Remodeling" className="mx-2" />
        
        </div>
        <div className="D-2">
          <div>
            <h1>Smart Traffic Management</h1>
            <p>
            Real-time monitoring and control of traffic signals,<br></br>
             congestion detection, and route optimization <br></br>
            to ensure smooth urban mobility.
            </p>
          </div>
          <div>
            <h1>Waste Management System</h1>
            <p>
            IoT-enabled waste bins, automated collection scheduling, <br></br>
            and tracking to maintain cleanliness <br></br>
            and promote sustainability.
            </p>
          </div>
          <div>
            <h1>Energy and Utility Monitoring</h1>
            <p>
            Smart grids and meters for efficient<br></br>
             electricity, water, and gas usage, with<br></br>
              alerts for leaks, overuse, or outages.

            </p>
          </div>
        </div>
        <div className="D-3">
          <img src={myImage14} alt="M&B Remodeling" className="mx-2" />
          <img src={myImage15} alt="M&B Remodeling" className="mx-2" />
          <img src={myImage16} alt="M&B Remodeling" className="mx-2" />
        </div>
        <div className="D-4">
          <div>
            <h1>Public Safety and Surveillance</h1>
            <p>
            Integrated CCTV, emergency response <br></br>
            systems, and crime detection analytics<br></br>
             to enhance urban security.
            </p>
          </div>
          <div>
            <h1>E-Governance Services</h1>
            <p>
            Digital platforms for service <br></br>
            requests, document processing,<br></br>
             grievance redressal, and citizen feedback,<br></br>
              improving transparency and accessibility.
            </p>
          </div>
          <div>
            <h1>Environmental Monitoring</h1>
            <p>
            Air quality sensors, weather data collection,<br></br>
             and pollution tracking to support sustainable<br></br>
              city planning and health initiatives.
            </p>
          </div>
        </div>
      </div>

      <div className="container-C7">
        <h1>
          Create your dream home.
          <br />
          Tell us about your dream.
        </h1>
        <button>Get Services.</button>
      </div>

      <div className="container-C9 container-fluid text-center py-35">
                <p>&copy; 2035 by M&B Remodeling. Powered and secured by Wix.</p>
                <div>
                    <img src={myImage6} alt="M&B Remodeling" className="mx-2" />
                    <img src={myImage7} alt="M&B Remodeling" className="mx-2" />
                    <img src={myImage8} alt="M&B Remodeling" className="mx-2" />
                </div>
            </div>
    </>
  )
};

export default Services;
