import './App.css'
import 'rsuite/dist/rsuite.min.css';
import 'rsuite/Button/styles/index.css';
import Logo from "./Logo.png"
import College from "./College.jpeg"
import Location from "./Location.png"
import Calendar from "./Calendar.png"
import Prize from "./Prize.png"
import Hero from "./Hero.png"
import { SocialIcon } from 'react-social-icons'
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Navbar, Nav } from 'rsuite';

function Home() {
  return (
    <div>
      <Navbar id="NavBar">
        <Navbar.Brand href="#"><img src={Logo} alt="Logo" height="50px" /></Navbar.Brand>
        <Nav>
          <Nav.Item className="NavItems">Discover Hackspire</Nav.Item>
          <Nav.Item className="NavItems">Executive Team</Nav.Item>
          <Nav.Item className="NavItems">Project Implementation</Nav.Item>
          <Nav.Item className="NavItems">Guidelines</Nav.Item>
          <Nav.Item className="NavItems">Idea Template</Nav.Item>
          <Nav.Menu title="Hackthon Details">
            <Nav.Item>Venue</Nav.Item>
            <Nav.Item>Registration</Nav.Item>
            <Nav.Item>Prizes</Nav.Item>
            <Nav.Item>Eligibility</Nav.Item>
          </Nav.Menu>
        </Nav>
      </Navbar>
      <div id="venue">
        <h1 className="headingodd">VENUE</h1>
        <div id="college"><img src={College} alt="College" /></div>
        <h2 className="headingodd">FUTURE INSTITUTE OF ENGINEERING AND MANAGEMENT</h2>
        <h2 className="headingeven">Sonarpur Station Rd, Mission Pally, Narendrapur, Kolkata, West Bengal-700150</h2>
        <div id="location"><a href="https://www.google.com/maps/place/Future+Institute+of+Engineering+and+Management/@22.4433497,88.4128536,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0272166e4cb263:0x27f12170efd9ddee!8m2!3d22.4433497!4d88.4154285!16s%2Fm%2F0j7j5ls?entry=ttu" target="_blank"><img src={Location} alt="Location" /></a></div>
        <button>View FIEM</button>
      </div>
      <div id="registration">
        <div className="gridd">
          <div><h2 className="headingodd">REGISTRATION</h2>
            <h2 className="headingeven">AND</h2>
            <h2 className="headingodd">UPDATES</h2>
            <p><span>Registration & Idea Submission :</span>
              Begins on 13th June,2024 and ends on 13th July,2024.<br />

              <span>Shortlisted Teams Announcement :</span> 1st August,2024.<br />

              <span>HACKSPIRE begins :</span> 13th August, 2024</p>
            <h2 className="headingodd">REGISTRATION</h2>
            <h2 className="headingeven">FEES</h2>
            <p><span>Registration fees is FREE</span></p>
          </div>
          <div><img src={Calendar} alt="Calendar" height="550px" /></div>

        </div>
      </div>
      <div id="rewards">
        <h2 className="headingodd" id="headleft">REWARDS</h2>
        <h2 className="headingeven">AND</h2>
        <h2 className="headingodd" id="headright">PRIZES</h2>
        <p>All participants will be provided a certificate of participation. Top 3 teams will be awarded with prize money, exciting goodies and a certificate of excellence for HACKSPIRE 2024.</p>
        <img src={Prize} alt="PRIZE" height="600px" />
        <li>Total cash prizes worth INR 45,000 + goodies for HACKSPIRE 2024</li>
        <li>Best Prize for innovation and creativity of INR 2,000</li>
        <li>Certificate of distinction for top 10 teams</li>
        <li>Certificate of participation to all teams</li>
      </div>
      <div id="eligibility">
        <div className="grid2">
          <div>
            <img src={Hero} alt="Hero" height="500px" />
          </div>
          <div id="criteria">
            <h2 className="headingodd">ELIGIBILITY</h2>
            <li>College students</li>
            <li>University students</li>
            <li>Polytechnic/Diploma students</li>
          </div>
        </div>
      </div>
      <div id="footer">
        <h2 id="footerheading">FOLLOW</h2>
        <h2 className="headingeven">US</h2>
        <p>2024-25 HACKSPIRE. All rights reserved<br />HACKSPIRE@fiem.org.in</p>
        <div id='social'>
          <SocialIcon url='www.facebook.com' />
          <SocialIcon url='www.instagram.com' />
          <SocialIcon url='www.linkedin.com' />
          <SocialIcon url='www.discord.com' />
        </div>
        <div>Made with <FavoriteIcon style={{ color: "#ff0000" }} /> by HACKSPIRE TECH TEAM</div>
      </div>
    </div>
  )
}

export default Home
