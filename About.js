import './About.css';
import myImage from '../src/img/WhatsApp Image 2025-03-26 at 18.48.47.jpeg';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import myImage1 from '../src/Screenshot_20250504-162713_YouTube.jpg';
import myImage2 from '../src/Screenshot_20250222-231728_Samsung Notes.jpg';
import myImage3 from '../src/Screenshot_20250228-233806_One UI Home.jpg';
import myImage4 from '../src/Screenshot_20250305-134917_Chrome.jpg';
import myImage5 from '../src/Screenshot_20250308-143308_Samsung Notes.jpg';
import myImage6 from '../src/img/facebook.avif';
import myImage7 from '../src/img/twitter.avif';
import myImage8 from '../src/img/youtube.avif';
import myImage9 from '../src/img/Gemini_Generated_Image_pgskhtpgskhtpgsk.jpeg';
import $ from 'jquery';
import { useEffect } from 'react';
function AboutUs() {

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

            <div className="main-1">
                <h1>About SCMS</h1>
                <p>A Smart City Management System (SCMS) is an integrated digital platform designed to enhance the efficiency, <br></br>
                    sustainability, and quality of life within urban environments. <br></br>
                    It leverages cutting-edge technologies such as the Internet of Things (IoT), artificial intelligence (AI), big data analytics, and <br></br>
                    cloud computing to monitor, manage, and optimize various city functions in real time.<br></br>
                    From traffic control, waste management, and energy consumption to water distribution, <br></br>
                    public safety, and citizen engagement, SCMS ensures seamless coordination across departments and services.</p>

                <p>By centralizing information through a user-friendly website and mobile interface, SCMS empowers both administrators and citizens.<br></br>
                    Residents can access services, report issues, and receive instant updates, while authorities can make data-driven decisions<br></br>
                    to address urban challenges efficiently. The system promotes transparency, reduces operational costs, and ensures faster response times.</p>

                <p>SCMS plays a crucial role in achieving sustainability goals by enabling smart infrastructure planning, reducing carbon footprints,<br></br>
                    and improving resource utilization. It fosters inclusive growth by ensuring that smart solutions reach every segment of society. <br></br>
                    In essence, a Smart City Management System is the digital foundation of future-ready cities—transforming traditional governance into <br></br>
                    proactive, intelligent, and citizen-centric urban management.
                </p>

            </div>
            <div className="main-2">


            </div>
            <div className="container-A2">
                <h1>Our Process</h1>
                <p>Our Smart City Management System follows a streamlined and data-driven process to<br></br>
                    ensure efficient urban governance and citizen-centric services. The journey begins<br></br>
                    with data collection from various smart devices, IoT sensors, <br></br>
                    surveillance systems, and public service portals across the city.<br></br>
                    This real-time data is securely transmitted to our centralized control center, <br></br>
                    where it is analyzed using advanced algorithms and AI models to generate actionable insights.</p>

                <p>These insights are used to automate operations such as traffic control, waste management, energy<br></br>
                    distribution, and emergency response. Our platform ensures that each department operates in harmony through <br></br>
                    integrated dashboard, promoting interconnectivity and faster decision-making.</p>

                <p>It Involves citizen interaction—residents can access services, submit complaints, and receive<br></br>
                    updates through a user-friendly web and mobile interface. Public feedback is continuously gathered and<br></br>
                    factored into our service optimization process.</p>

                <p>Continuous monitoring and improvement are at the core of our methodology. Performance metrics and <br></br>
                    analytics help identify gaps and opportunities for better service delivery, ensuring that the system evolves <br></br>
                    with the city’s changing needs.Through this cycle of data, action, feedback, and refinement, <br></br>
                    our process delivers a responsive, transparent, and future-ready urban management experience.</p>
            </div>
            <div className="container-A3">
                <div className="container-A4">
                    <div className="B-1">
                        <img src={myImage2} alt="M&B Remodeling" className="img" />
                    </div>
                    <div className="C-2">
                        <h1>Real-Time Data<br></br> Monitoring
                        </h1>
                        <p>Integrates IoT sensors and devices <br></br>
                            to collect and analyze data from traffic, <br></br>
                            air quality, utilities, and public infra-<br></br>
                            structure in real time.
                        </p>
                    </div>
                    <div className="B-3">
                        <img src={myImage3} alt="M&B Remodeling" className="img" />
                    </div>
                    <div className="C-4">
                        <h1>
                            Centralized <br></br>Service
                        </h1>
                        <p>Offers a unified platform for administrators and citizens<br></br>
                            to access services, manage complaints, view <br></br>
                            updates, and monitor<br></br>
                            performance metrics.
                        </p>
                    </div>
                </div>
                <div className="container-B5">
                    <div className="C-5">
                        <h1>Smart Resource<br></br> Management</h1>
                        <p>Optimizes the use of water, electricity,<br></br>
                            and waste through automated systems, <br></br>
                            reducing wastage and <br></br>
                            promoting sustainability.
                        </p>
                    </div>
                    <div className="C-6">
                        <img src={myImage4} alt="M&B Remodeling" className="img" />

                    </div>
                    <div className="C-7">
                        <h1>Citizen Engagement<br></br> and Feedback</h1>
                        <p>Enables active participation through <br></br>
                            online forms, feedback tools,<br></br>
                            and notification systems, enhancing<br></br>
                            transparency and community involvement.
                        </p>
                    </div>
                    <div className="C-8">
                        <img src={myImage5} alt="M&B Remodeling" className="img" />
                    </div>
                </div>
            </div>
            <div className="container-B6">
                <h1>
                    Our Quality Guarantee
                </h1>
                <p>
                    At the heart of our Smart City Management System is an unwavering commitment to quality, reliability, and excellence.<br></br>
                    We guarantee a high-performance platform that meets global standards in smart governance and urban development. <br></br>
                    Our system is built on robust architecture using cutting-edge technologies such as AI, IoT, and cloud computing to ensure<br></br>
                    maximum uptime, real-time responsiveness, and secure data handling.</p>

                <p>We follow a quality-first approach across every stage of development and deployment — from sensor integration and <br></br>
                    backend processing to the user interface and citizen engagement tools. Our processes undergo continuous testing, monitoring, <br></br>
                    and updates to maintain system accuracy, efficiency, and adaptability to evolving city needs.</p>

                <p>Our system complies with international best practices in cybersecurity, data privacy, and urban planning standards. <br></br>
                    We ensure that every feature is user-friendly, inclusive, and <br></br>
                    accessible to all citizens, regardless of technical background.</p>

                <p>We also provide 24/7 technical support, regular system audits, and prompt resolution of any issues. <br></br>
                    Whether it's managing utilities, traffic, waste, or public services, our quality guarantee assures seamless performance,<br></br>
                    minimal disruption, and maximum satisfaction.</p>

                <p>With our Smart City Management System, you don’t just get technology<br></br>
                    you get a trusted partner committed to building<br></br>
                    a smarter, safer, and more sustainable future.</p>

            </div>
            <div className="container-B7">
                <h1>
                    Create your dream home.<br></br>
                    Tell us about your dream.
                </h1>
                <button>Move one step Towards Your Dream.</button>
            </div>
            <div className="container-B9 container-fluid text-center py-35">
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
export default AboutUs;