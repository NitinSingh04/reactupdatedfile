import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../index.css'
import Ar from "./images/ARVR.png"
import Xbox from "./images/Xbox.png"
import classic from "./images/classic.png"
import crs from "./images/carSimulator.png"
import logo from "./images/logo.jpg"
import location from "./images/location.png"
import fort from "./images/fortnite.png"
import cod from "./images/callOfDuty.png"

function Shubhh() {
    
    const [fullName,setFullName] = useState()
    const [mobilenumber,setmobilenumber]= useState()
    const [Date,setDate] = useState()
    const [timeslot,setTimeslot] = useState()
    const [nop,setnop] = useState()
    const [gexp,setgexp] = useState()
    const [specreq,setspecreq] = useState()
    const [data,setData]= useState()
    const [amount,setamount]=useState(0)

    console.log(fullName,mobilenumber,Date,timeslot,nop,gexp,specreq)

    // var timings=[
    //                                "11:00 AM-12:00 PM",
    //                                 "1:00 PM-2:00 PM",
    //                                 "2:00 PM-3:00 PM",
    //                                 "3:00 PM-4:00 PM",
    //                                 "4:00 PM-5:00 PM",
    //                                 "5:00 PM-6:00 PM",
    //                                 "6:00 PM-7:00 PM",
    //                                 "7:00 PM-8:00 PM",
    //                                 "8:00 PM-9:00 PM",
    //                                 "9:00 PM-10:00 PM", 
    // ]

    var prices=[
        {"ps4":100},{"ps5":120},{"racSimul":200},{"vr":120},{"racingSimulator":200}
    ]

    var gamesexp=[
        "Virtual Reality Arena",
        "PlayStation VR",
        "PlayStation 5 (I)",
        "PlayStation 5 (II)",
        "PlayStation 5 (III)",
        "PlayStation 4 (I)",
        "PlayStation 4 (II)",
        "Racing Simulators",
        "Arcade Classics",
    ]

    const calculateAmount = () => {
        if (!gexp || !nop) return;
        
        let price = 0;
        if (gexp.includes("PlayStation 4")) {
            price = prices[0].ps4;
        } else if (gexp.includes("PlayStation 5")) {
            price = prices[1].ps5;
        } else if (gexp.includes("Racing Simulators")) {
            price = prices[2].racSimul;
        } else if (gexp.includes("Virtual Reality")) {
            price = prices[3].vr;
        }
        
        const totalAmount = price * parseInt(nop);
        setamount(totalAmount);
    }
    React.useEffect(() => {
        calculateAmount();
    }, [gexp, nop]);

                                    
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setBData(prevState => ({
    //       ...prevState,
    //       [name]: value
    //     }));
    //   };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('https://finalbgmi-backend.onrender.com/api/createTicket', {mobileNumber:mobilenumber, amount:100, date:Date, timeslot:timeslot, game:gexp, guest:nop});
          console.log('booking successful:', response.data);
          setData(response.data.message)
         
        } catch (error) {
          console.error('Login failed:', error.response?.data || error.message);
        }
      };
    


  return (
    <div id="main">  
    {/* <!-- Navbar --> */}
    <header class="navbar">
        <div class="container">
            <div class="navbar-content">
                <a href="/" class="logo">
                    {/* <!-- <i class="fas fa-bolt"></i> --> */}
                     <img id="logophoto" src={logo} class="" alt="" />
                    <span id="battleLogo" class="neon-text neon-red">BATTLEGROUND</span>
                </a>
                <nav class="nav-links">
                    <a href="#games" class="nav-link font-bold">Games</a>
                    <a href="#booking" class="nav-link font-bold">Booking</a>
                    <a href="#events" class="nav-link font-bold">Events</a>
                    <a href="#location" class="nav-link font-bold">Location</a>
                    {/* <!-- <a href="login.html" class="nav-link font-bold">Login</a> --> */}
                </nav>

                <a id="contact" href='#location' class="btn btn-gradient-blue-red">Contact Us</a>
            </div>
        </div>
    </header>

    {/* <!-- Hero Section --> */}
    <section class="hero" id="hero">
        <div class="hero heroSection-bg"></div>
        <div class="hero-content heroSection-bg">
            <h1 id="holu" class="hero-title">
                <span class="neon-text neon-red">THE</span><br/>
                <span class="neon-text neon-red ">BATTLEGROUND</span> <br/>
                <span class="neon-text neon-red">GAMEZONE</span>
            </h1>

            <p class="hero-subtitle">
                Experience next-level gaming with cutting-edge technology and immersive environments
            </p>

            <div class="hero-buttons">
                <a  href="#booking" class="btn btn-gradient-pink-purple">Book Now</a>
                <a href="#games" class="btn btn-outline-blue">Explore Games</a>
            </div>

            <a href="#games" class="scroll-down">
                <span>Scroll Down</span>
                <i class="fas fa-chevron-down bounce"></i>
            </a>
        </div>
        <div class="hero-overlay"></div>
        {/* <!-- <img src="img/download.jpeg" alt="Gaming VR Background" class="hero-bg"> --> */}
    </section>
    {/* <!-- Games Section --> */}
    <section id="games" class="section games-section">
        <div class="section-bg games-bg"></div>
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">
                    <span class="neon-text neon-blue">Our Gaming Experiences</span>
                </h2>
                <p class="section-subtitle">
                    Discover our wide range of immersive gaming experiences designed for all ages and skill levels
                </p>
            </div>

            <div class="games-grid">
                
                <div class="game-card" data-color="purple">
                    <div class="game-card-image">
                        <img src="https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxheSUyMHN0YXRpb24lMjA1fGVufDB8fDB8fHww" alt="Console Gaming Lounge" />
                        <div class="game-card-overlay"></div>
                    </div>
                    <div class="game-card-content">
                        <h3 class="game-card-title">Play Station 5</h3>
                        <p class="game-card-description">Comfortable gaming stations with the latest consoles and games for casual and competitive play.</p>
                        <a href="#booking" class="btn btn-purple">Book Now</a>
                    </div>
                </div>

                <div class="game-card" data-color="blue">
                    <div class="game-card-image">
                        <img src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2FtaW5nJTIwY29uc29sZXxlbnwwfHwwfHx8MA%3D%3D" alt="Escape Rooms" />
                        <div class="game-card-overlay"></div>
                    </div>
                    <div class="game-card-content">
                        <h3 class="game-card-title">Play Station 4</h3>
                        <p class="game-card-description">Test your problem-solving skills in our themed escape rooms with immersive storylines.</p>
                        <a href="#booking" class="btn btn-blue">Book Now</a>
                    </div>
                </div>

                <div class="game-card" data-color="red">
                    <div class="game-card-image">
                        <img src={Ar} alt="Virtual Reality Arena" />
                        <div class="game-card-overlay"></div>
                    </div>
                    <div class="game-card-content" >
                        <h3 class="game-card-title">Virtual Reality Arena</h3>
                        <p class="game-card-description">Step into another world with our cutting-edge VR experiences. Perfect for groups and parties.</p>
                        <a href="#booking" class="btn btn-red">Book Now</a>

                    </div>
                </div>
                
                <div class="game-card" data-color="green">
                    <div class="game-card-image">
                        <img src={Xbox} alt="Laser Tag Combat" />
                        <div class="game-card-overlay"></div>
                    </div>
                    <div class="game-card-content">
                        <h3 class="game-card-title">Xbox Series X</h3>
                        <p class="game-card-description">Engage in tactical team battles in our neon-lit arena with state-of-the-art equipment.</p>
                        <a href="#booking" class="btn btn-green">Book Now</a>
                    </div>
                </div>
                <div class="game-card" data-color="pink">
                    <div class="game-card-image">
                        <img src={crs} alt="Racing Simulators" />
                        <div class="game-card-overlay"></div>
                    </div>
                    <div class="game-card-content">
                        <h3 class="game-card-title">Racing Simulators</h3>
                        <p class="game-card-description">Feel the adrenaline with our professional-grade racing simulators with motion feedback.</p>
                        <a href="#booking" class="btn btn-pink">Book Now</a>

                    </div>
                </div>

                <div class="game-card" data-color="yellow">
                    <div class="game-card-image">
                        <img src={classic} alt="Arcade Classics" />
                        <div class="game-card-overlay"></div>
                    </div>
                    <div class="game-card-content">
                        <h3 class="game-card-title">Arcade Classics</h3>
                        <p class="game-card-description">Relive the golden age of gaming with our collection of classic and modern arcade games.</p>
                        <a href="#booking" class="btn btn-yellow">Book Now</a>

                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Features Section --> */}
    <section class="section features-section">
        <div class="section-bg features-bg"></div>
        <div class="container">
            <div class="features-grid">
                <div class="features-image">
                    <img src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?ixlib=rb-4.0.3" alt="Gaming Features" />
                    <div class="features-image-overlay"></div>
                </div>

                <div class="features-content">
                    <h2 class="features-title">
                        <span class="neon-text neon-pink">Why Choose</span> 
                        <span class="neon-text neon-green">Battleground Gaming?</span>
                    </h2>

                    <div class="features-list">
                        <div class="feature-card neon-border neon-green">
                            <div class="feature-icon">
                                <i class="fas fa-gamepad"></i>
                            </div>
                            <div class="feature-details">
                                <h3 class="feature-title">Cutting-Edge Technology</h3>
                                <p class="feature-description">Experience gaming on the latest hardware with immersive displays and responsive controls.</p>
                            </div>
                        </div>

                        <div class="feature-card neon-border neon-blue">
                            <div class="feature-icon">
                                <i class="fas fa-users"></i>
                            </div>
                            <div class="feature-details">
                                <h3 class="feature-title">Perfect for Groups</h3>
                                <p class="feature-description">Ideal for birthday parties, corporate events, and team-building activities.</p>
                            </div>
                        </div>

                        <div class="feature-card neon-border neon-pink">
                            <div class="feature-icon">
                                <i class="fas fa-trophy"></i>
                            </div>
                            <div class="feature-details">
                                <h3 class="feature-title">Competitive Gaming</h3>
                                <p class="feature-description">Regular tournaments and leaderboards to showcase your skills and win prizes.</p>
                            </div>
                        </div>

                        <div class="feature-card neon-border neon-purple">
                            <div class="feature-icon">
                                <i class="fas fa-party-horn"></i>
                            </div>
                            <div class="feature-details">
                                <h3 class="feature-title">Special Events</h3>
                                <p class="feature-description">Themed nights, game launches, and exclusive member events throughout the year.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Booking Section --> */}
    <section id="booking" class="section booking-section">
        <div class="section-bg booking-bg"></div>
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">
                    <span class="neon-text neon-green">Book Your Gaming Session</span>
                </h2>
                <p class="section-subtitle">
                    Reserve your spot for an unforgettable gaming experience with friends and family
                </p>
            </div>

            <div class="booking-grid">
                <div class="booking-form neon-border neon-green">
                    <h3 class="booking-form-title">Booking Form</h3>

                    <form onSubmit={handleSubmit} id="bookingForm">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="fullName">Full Name</label>
                                <input type="text" id="fullName" placeholder="Your name" class="form-input" value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required />
                            </div>
                            <div class="form-group">
                                <label for="mobile number">Mobile Number</label>
                                <input type="" id="Mnumber" placeholder="Mobile Number" class="form-input" onChange={(e) => setmobilenumber(e.target.value)}
                                required />
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label for="date">Date</label>
                                <div class="input-icon">
                                    <i class="fas fa-calendar"></i>
                                    <input type="datetime-local" id="date" class="form-input" onChange={(e) => setDate(e.target.value)}
                                required />
                                </div>
                            </div>
                            {/* <div class="form-group">
                                <label for="time">Time</label>
                                <div class="input-icon">
                                    <i class="fas fa-clock"></i>
                                    <input type="time" id="time" class="form-input" onChange={(e) => setTimeslot(e.target.value)}/>
                                </div>
                                 {/* <select id="experience" class="form-select" onChange={(e) => setTimeslot(e.target.value)}>
                                    <option value="" disabled selected>Select Time</option>
                                    {timings.map((t,index) => (
                                        <option key={index} value={timeslot}>{t}</option>
                                    ))}
                                </select> *
                            </div> */}
                            <div class="form-group">
                                <label for="people">Number of People</label>
                                <div class="input-icon">
                                    <i class="fas fa-users"></i>
                                    <input type="number" id="people" min="1" placeholder="Number of guests" class="form-input" onChange={(e) => setnop(e.target.value)}
                                required />
                                </div>
                            </div>
                        </div>

                        <div class="form-row">
                            {/* <div class="form-group">
                                <label for="people">Number of People</label>
                                <div class="input-icon">
                                    <i class="fas fa-users"></i>
                                    <input type="number" id="people" min="1" placeholder="Number of guests" class="form-input" onChange={(e) => setnop(e.target.value)}
                                required />
                                </div>
                            </div> */}
                            <div class="form-group">
                                <label for="experience">Gaming Experience</label>
                                <select id="experience" class="form-select" onChange={(e) => setgexp(e.target.value)}>
                                    <option value="" disabled selected>Select experience</option>
                                    {gamesexp.map((t,index) => (
                                        <option key={index} value={gexp} >{t}</option>
                                    ))}
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="amount">Total Amount</label>
                                
                                <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                                 <i class="fa-solid fa-indian-rupee-sign"></i> 
                                     {amount}
                                </div>
                            </div>
                           
                        </div>
                         {/* <div class="form-row">
                            
                            </div> */}

                        {/* <div class="form-group">
                            <label for="requests">Special Requests</label>
                            <textarea id="requests" rows="4" placeholder="Any special requirements or requests" class="form-textarea"></textarea>
                        </div> */}

                        <button type="submit" onSubmit={handleSubmit} class="btn btn-gradient-green-blue btn-full">Book Now</button>
                        {/* <div>{data}</div> */}
                    </form>
                </div>

                <div class="booking-info">
                    <div class="hours-card neon-border neon-blue">
                        <h3 class="hours-title">Opening Hours</h3>

                        <div class="hours-list">
                            <div class="hours-item">
                                <span class="day">Monday </span>
                                <span class="time">Closed</span>
                            </div>
                            <div class="hours-item">
                                <span class="day">All Days</span>
                                <span class="time">10:00 AM - 10:00 PM</span>
                            </div>
                            {/* <div class="hours-item">
                                <span class="day">Saturday</span>
                                <span class="time">9:00 AM - 1:00 AM</span>
                            </div>
                            <div class="hours-item">
                                <span class="day">Sunday</span>
                                <span class="time">11:00 AM - 10:00 PM</span>
                            </div> */}
                        </div>
                    </div>

                     {/* <div class="packages-card neon-border neon-pink">
                        <h3 class="packages-title">Group Packages</h3>

                        <div class="packages-list">
                            <div class="package-item">
                                <h4 class="package-name">Birthday Package</h4>
                                <p class="package-description">Perfect for celebrating birthdays with gaming, food, and dedicated party space.</p>
                                <div class="package-price">
                                    <span class="price">$299</span>
                                    <span class="price-info">/ up to 10 people</span>
                                </div>
                            </div>

                            <div class="package-item">
                                <h4 class="package-name">Corporate Team Building</h4>
                                <p class="package-description">Strengthen team bonds with collaborative gaming challenges and private space.</p>
                                <div class="package-price">
                                    <span class="price">$499</span>
                                    <span class="price-info">/ up to 20 people</span>
                                </div>
                            </div>

                            <div class="package-item">
                                <h4 class="package-name">VIP Experience</h4>
                                <p class="package-description">Premium access to all gaming zones with dedicated staff and catering options.</p>
                                <div class="package-price">
                                    <span class="price">$799</span>
                                    <span class="price-info">/ up to 15 people</span>
                                </div>
                            </div>
                        </div>
                    </div>  */}
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Events Section --> */}
    <section id="events" class="section events-section">
        <div class="section-bg events-bg"></div>
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">
                    <span class="neon-text neon-pink">Upcoming Events</span>
                </h2>
                <p class="section-subtitle">
                    Join our special gaming events, tournaments, and themed nights
                </p>
            </div>

            <div class="events-grid">
                <div class="event-card pink-event">
                    <div class="event-image">
                        <img src={fort} alt="Tournament Event" />
                        <div class="event-overlay"></div>
                        <div class="event-badge">TOURNAMENT</div>
                    </div>

                    <div class="event-content">
                        <h3 class="event-title">Fortnite Championship</h3>
                        <p class="event-description">Compete against the best players and win exclusive prizes in our monthly tournament.</p>

                        <div class="event-date">
                            <i class="fas fa-calendar"></i>
                            <span>June 15, 2023 • 6:00 PM</span>
                        </div>

                        <button class="btn btn-pink btn-full">Register Now</button>
                    </div>
                </div>

                <div class="event-card blue-event">
                    <div class="event-image">
                        <img src={cod} alt="Launch Party" />
                        <div class="event-overlay"></div>
                        <div class="event-badge">LAUNCH PARTY</div>
                    </div>

                    <div class="event-content">
                        <h3 class="event-title">Call of Duty: Warzone 2.0</h3>
                        <p class="event-description">Be among the first to experience the new Warzone map with our exclusive launch event.</p>

                        <div class="event-date">
                            <i class="fas fa-calendar"></i>
                            <span>June 22, 2023 • 8:00 PM</span>
                        </div>

                        <button class="btn btn-blue btn-full">RSVP Now</button>
                    </div>
                </div>

                <div class="event-card green-event">
                    <div class="event-image">
                        <img src="placeholder.jpg" alt="VR Night" />
                        <div class="event-overlay"></div>
                        <div class="event-badge">SPECIAL EVENT</div>
                    </div>

                    <div class="event-content">
                        <h3 class="event-title">VR After Dark</h3>
                        <p class="event-description">Adults-only VR gaming night with special challenges and premium drinks included.</p>

                        <div class="event-date">
                            <i class="fas fa-calendar"></i>
                            <span>June 30, 2023 • 9:00 PM</span>
                        </div>

                        <button class="btn btn-green btn-full">Get Tickets</button>
                    </div>
                </div>
            </div>

            <div class="events-more">
                <button class="btn btn-gradient-pink-purple">View All Events</button>
            </div>
        </div>
    </section>

    {/* <!-- Location Section --> */}
    <section id="location" class="section location-section">
        <div class="section-bg location-bg"></div>
        <div class="container">
            <div class="location-grid">
                <div class="location-info">
                    <h2 class="location-title">
                        <span class="neon-text neon-purple">Find Us</span>
                    </h2>

                    <div class="info-list">
                        <div class="info-item">
                            <div class="info-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="info-content">
                                <h3 class="info-title">Our Location</h3>
                                <p class="info-description">
                                    Swarna Jayanti nagar,Rmaghat Road<br />
                                    Aligarh, Uttar Pradesh 202001<br />
                                    India
                                </p>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="info-icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div class="info-content">
                                <h3 class="info-title">Contact Us</h3>
                                <p class="info-description">
                                    Phone: +91 98765 43210<br />
                                    Email: info@BATTLEGROUNDgaming.com
                                </p>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="info-icon">
                                <i class="fas fa-clock"></i>
                            </div>
                            <div class="info-content">
                                <h3 class="info-title">Opening Hours</h3>
                                <p class="info-description">
                                    Tuesday - Sunday: 10:00 AM - 11:00 PM<br />
                                </p>
                            </div>
                        </div>

                        <div class="social-links">
                            <h3 class="social-title">Follow Us</h3>
                            <div class="social-icons">
                                <a href="https://www.instagram.com/the_battleground_gamezone/" class="social-icon">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                {/* <a href="#" class="social-icon">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" class="social-icon">
                                    <i class="fab fa-twitter"></i>
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="location-map neon-purple">
                    <img id="loca" src={location} alt="Location Map" />
                    <div class="map-overlay">
                        <a href="https://www.google.co.in/maps/place/BATTLEGROUND+GAMEZONE+ALIGARH/@27.8967597,78.0972301,20z/data=!4m6!3m5!1s0x3974a51ad1e97e17:0x7431380e8c40918d!8m2!3d27.8966537!4d78.0972868!16s%2Fg%2F11td0q51j7?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D" class="btn btn-purple">Get Directions</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Newsletter Section --> */}
    <section class="section newsletter-section">
        <div class="section-bg newsletter-bg"></div>
        <div class="container">
            <div class="newsletter-content">
                <h2 class="newsletter-title">
                    <span class="neon-text neon-blue">Stay Connected</span>
                </h2>
                <p class="newsletter-subtitle">
                    Subscribe to our newsletter for exclusive offers, event updates, and gaming news 
                </p>

                <form class="newsletter-form">
                    <input type="email" placeholder="Your email address" class="newsletter-input" />
                    <button type="submit" class="btn btn-gradient-blue-purple">Subscribe</button>
                </form>
            </div>
        </div>
    </section>

    {/* <!-- Footer --> */}
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-about">
                    <a href="/" class="footer-logo">
                        <i class="fas fa-bolt"></i>
                        <span class="neon-text neon-green">BATTLEGROUND</span>
                    </a>
                    <p class="footer-description">
                        The ultimate gaming destination with cutting-edge technology and immersive experiences for gamers of all levels.
                    </p>
                    <div class="footer-social">
                        <a href="#" class="footer-social-link">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="footer-social-link">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="footer-social-link">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>

                <div class="footer-links">
                    <h3 class="footer-title">Quick Links</h3>
                    <ul class="footer-menu">
                        <li><a href="#games">Games</a></li>
                        <li><a href="#booking">Booking</a></li>
                        <li><a href="#events">Events</a></li>
                        <li><a href="#location">Location</a></li>
                    </ul>
                </div>

                <div class="footer-links">
                    <h3 class="footer-title">Gaming Experiences</h3>
                    <ul class="footer-menu">
                        <li><a href="#">Virtual Reality</a></li>
                        <li><a href="#">Laser Tag</a></li>
                        <li><a href="#">Racing Simulators</a></li>
                        <li><a href="#">Arcade Games</a></li>
                    </ul>
                </div>

                <div class="footer-contact">
                    <h3 class="footer-title">Contact Info</h3>
                    <ul class="footer-info">
                        <li>
                            <i class="fas fa-map-marker-alt"></i>
                            <span>
                                123 Gaming Street, Tech District<br />
                                Noida, Uttar Pradesh 201301
                            </span>
                        </li>
                        <li>
                            <i class="fas fa-phone"></i>
                            <span>+91 98765 43210</span>
                        </li>
                        <li>
                            <i class="fas fa-envelope"></i>
                            <span>info@BATTLEGROUNDgaming.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p class="copyright">
                    &copy; <span id="current-year"></span> BATTLEGROUND Gaming Zone. All rights reserved.
                </p>
                <div class="footer-legal">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookie Policy</a>
                </div>
            </div>
        </div>
    </footer>
</div>
  )
}

export default Shubhh
