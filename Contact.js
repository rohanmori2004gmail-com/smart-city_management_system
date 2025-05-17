import './Contact.css';
import myImage from '../src/img/WhatsApp Image 2025-03-26 at 18.48.47.jpeg';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import ContactForm1 from "./ContactForm1";
import React from "react";
import myImage2 from '../src/img/icon 1.avif';
import myImage3 from '../src/img/Hom3.avif';
import myImage4 from '../src/img/100.avif';
import myImage5 from '../src/img/mel.jpg';
import myImage6 from '../src/img/facebook.avif';
import myImage7 from '../src/img/twitter.avif';
import myImage8 from '../src/img/youtube.avif';
import myImage9 from '../src/img/Gemini_Generated_Image_pgskhtpgskhtpgsk.jpeg'
import $ from 'jquery';
import { useEffect } from 'react';
function Contact() {

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
                        <img src={myImage9} alt="M&B Remodeling" className="" style={{ height: '40px', width: '40px' }} />
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

            <div className="container-E6">
                <div className="F-6 row">
                    <div className="F-7 col-md-6" >
                        <p>Let's Discuss<br></br>
                            Your Next Project
                        </p><br></br>
                        <div className="F-10">
                            <p>Fill out the form, or call us to<br></br>

                                set up a free in-home consultation.
                            </p><br></br>
                        </div>
                        <div className="F-11">
                            <p>Service Areas:</p><br></br>
                        </div>
                        <div className="F-12">
                            <p>San Francisco, Santa Clara, Alameda, San Mateo<br />500 Terry Francine Street San Francisco, CA 94158</p><br></br>
                        </div>
                        <div className="F-13">
                            <p>info@mysite.com</p><br></br>
                        </div>
                        <div className="F-14">
                            <p>123-456-7890</p>
                        </div>
                    </div>
                    <div className="container-E7 col-md-6">
                        <ContactForm1 />
                    </div>
                </div>
            </div>

            <div class="map-container">
                <iframe
                    title="Wix Office Location"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.488309452326!2d34.791374075660705!3d32.074474619062264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b9c4b172a4d%3A0x6b672d609c10b512!2sWix.com!5e0!3m2!1sen!2sil!4v1713274681301!5m2!1sen!2sil"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <div className="container-E9 container-fluid text-center py-3">
                <p>&copy; 2035 by M&B Remodeling. Powered and secured by Wix.</p>
                <div>
                    <img src={myImage6} alt="M&B Remodeling" className="mx-2" />
                    <img src={myImage7} alt="M&B Remodeling" className="mx-2" />
                    <img src={myImage8} alt="M&B Remodeling" className="mx-2" />
                </div>
            </div>

        </>
    )
}
export default Contact;