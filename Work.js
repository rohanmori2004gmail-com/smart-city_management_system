import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import myImage from '../src/img/WhatsApp Image 2025-03-26 at 18.48.47.jpeg';
import './Work.css';
import myImage6 from '../src/img/facebook.avif';
import myImage7 from '../src/img/twitter.avif';
import myImage8 from '../src/img/youtube.avif';
import myImage12 from '../src/Screenshot_20250504-183826_Gallery.jpg';
import myImage11 from '../src/Gemini_Generated_Image_3hnvd93hnvd93hnv.jpeg';
import myImage13 from '../src/Screenshot_20250504-183836_Gallery.jpg';
import myImage14 from '../src/Screenshot_20250504-183844_Gallery.jpg';
import myImage15 from '../src/Screenshot_20250504-183851_Gallery.jpg';
import myImage16 from '../src/Screenshot_20250504-183900_Gallery.jpg';
import myImage9 from '../src/img/Gemini_Generated_Image_pgskhtpgskhtpgsk.jpeg'
import $ from 'jquery';
import { useEffect } from 'react';
function Work() {

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






            <div className="container-D1">
                <h1> Our Work</h1>
                <p>You’re invited to browse a selection of recently completed workss below.</p>
            </div>
            <div className="container-D2">
                <div className="E-1">
                    <img src={myImage11} alt="M&B Remodeling" className="mx-2" />
                    <img src={myImage12} alt="M&B Remodeling" className="mx-2" />
                    <img src={myImage13} alt="M&B Remodeling" className="mx-2" />
                </div>

                <div className="E-3">
                    <img src={myImage14} alt="M&B Remodeling" className="mx-2" />
                    <img src={myImage15} alt="M&B Remodeling" className="mx-2" />
                    <img src={myImage16} alt="M&B Remodeling" className="mx-2" />
                </div>



            </div>

            <div className="container-D7">
                <h1>

                    Create your dream home.<br></br>
                    Tell us about your dream.
                </h1>
                <button>Get Information.</button>
            </div>
            <div className="container-D9 container-fluid text-center py-35">
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
export default Work;






