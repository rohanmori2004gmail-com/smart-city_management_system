import './App.css';
import $ from 'jquery';
import { useEffect } from 'react';
import myImage from '../src/img/WhatsApp Image 2025-03-26 at 18.48.47.jpeg';
import myImage1 from '../src/img/kitchen.jpg';
import myImage2 from '../src/img/icon 1.avif';
import myImage3 from '../src/img/Hom3.avif';
import myImage4 from '../src/img/100.avif';
import myImage5 from '../src/img/mel.jpg';
import myImage6 from '../src/img/facebook.avif';
import myImage7 from '../src/img/twitter.avif';
import myImage8 from '../src/img/youtube.avif';
import myImage9 from '../src/img/Gemini_Generated_Image_pgskhtpgskhtpgsk.jpeg';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import React from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Distinct reflective animation for each div by ID
    $('#mainDiv').hide().fadeIn(1000);
    $('#containerA3').css({ transform: 'scale(0.9)' }).animate({ opacity: 1, transform: 'scale(1)' }, 1000);
    $('#containerA5').slideDown(1000);
    $('#containerA8').hide().fadeIn(1500);
    $('#containerA9').hide().fadeIn(2000);

    // Button interactions: click + tooltip
    $('button').css('cursor', 'pointer');

    

    $('button').hover(function () {
      $(this).attr('title', 'Keep In Touch!');
    });

    // Search functionality
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
            <img src={myImage9} alt="M&B Remodeling" className="mr-2" style={{ height: '40px' }} />
            <h1>Smart-City Management System</h1>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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

      <div id="mainDiv" className="main">
        <h1>
          <p>One World</p>
          <p>One Family</p>
          <p>One Smart City</p>
        </h1>
        <button className="btn">Clean City Green City</button>
      </div>

      <div id="containerA3" className="container-A3">
        <div className="B-2"><h1>Why Choose Us</h1></div>
        <div className="B-3">

          <div><h3>Data-Driven Urban<br></br> Intelligence</h3>
          <p>We leverage real-time data analytics and IoT integration to enhance decision-making, reduce inefficiencies, and improve the overall quality of city life.</p></div>
          <div><h3>Citizen-Centric<br></br> Solutions</h3>
          <p>Our platform prioritizes inclusive engagement by empowering residents through mobile apps, feedback systems, and transparent governance tools.</p></div>
          <div><h3>Sustainable Infrastructure<br></br> Planning</h3>
          <p>We focus on eco-friendly technologies and smart utilities to promote energy conservation, waste management, and green urban growth.</p></div>
          <div><h3>Scalable and Secure Technology</h3>
          <p>Built on a robust, scalable architecture with end-to-end cybersecurity, our system is future-ready to adapt to evolving city needs.</p></div>
        </div>
      </div>

      <div id="containerA5" className="container-A5">
        <h1>Satisfied Customers</h1>
        <div className="A-6">
          <div className="A-6">
            <div className="AB-6">
              <h3>,,</h3>
              <p>“The website is incredibly user-friendly. As a resident, I can easily access public services, lodge complaints, and track updates—all in one place!”



</p>
              <h2>Dave Reddington</h2>
            </div>
            <div className="AB-6">
              <h3>,,</h3>
              <p>“From traffic updates to utility schedules, the website keeps everything transparent and centralized. It's the digital backbone of our smart city experience.”



</p>
              <h2>Amelia Banks</h2>
            </div>
            <div className="AB-6">
              <h3>,,</h3>
              <p>“Managing civic tasks has never been easier. The dashboard is intuitive, responsive, and saves us hours of administrative work each week.”



</p>
              <h2>Kenny Stutes</h2>
            </div>
          </div>
        </div>
      </div>

      <div id="containerA8" className="container-A8">
      <img src={myImage2} alt="M&B Remodeling" className="mx-2" />
        <img src={myImage3} alt="M&B Remodeling" className="mx-2" />
        <img src={myImage4} alt="M&B Remodeling" className="mx-2" />
        <img src={myImage5} alt="M&B Remodeling" className="mx-2" />
      </div>

      <div id="containerA9" className="container-A9">
      <p>&copy; 2035 by M&B Remodeling. Powered and secured by Wix.</p>
        <div>
          <img src={myImage6} alt="Facebook" className="mx-2" />
          <img src={myImage7} alt="Twitter" className="mx-2" />
          <img src={myImage8} alt="YouTube" className="mx-2" />
        </div>
      </div>
    </>
  );
}

export default App;



