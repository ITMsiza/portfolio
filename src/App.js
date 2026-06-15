import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './icons/fontAwesomeLibraries';
import { Element } from 'react-scroll';
import StickyNavbar from './StickyNavbar';
import EmailButton from './components/EmailButton';
import myImage from './assets/gradPic.JPG';
import { faFolder, faGithub } from './icons/fontAwesomeLibraries';
import { Fade } from 'react-awesome-reveal';
import Navbar from './Navbar';
import TypingEffect from './TypingEffect';

function App() {

  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const sentences = [
    "Full Stack Developer.",
    "Frontend Developer.",
    "Spring Boot Backend Developer",
    "Web Developer.",
    "Software Developer."
  ];

  const toggleShowMore1 = () => {
    setShowMore1(!showMore1);
  };

  const toggleShowMore2 = () => {
    setShowMore2(!showMore2);
  };

  const jsxContent = (
    <section className="App">
      <StickyNavbar />
      <div className='stuckIcon'>
        <div className="brands" >
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
          <a href="#">
            <FontAwesomeIcon className="brandIcon" icon={['fab', 'facebook']} />
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
          <a href="#">
            <FontAwesomeIcon className="brandIcon" icon={['fab', 'instagram']} />
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
          <a href="#">
            <FontAwesomeIcon className="brandIcon" icon={['fab', 'linkedin-in']} />
          </a>
          <a href="https://github.com/ITMsiza?tab=repositories">
            <FontAwesomeIcon className="brandIcon" icon={['fab', 'github']} />
          </a>
          <a href="#">
            <FontAwesomeIcon className="brandIcon" icon={['fab', 'youtube']} />
          </a>
          <div class="verticalLine"></div>
        </div>
        <div className="link">
          <a>itmsiza1994@gmail.com </a>
          <hr className='verticalLineLink' />
        </div>
      </div>
      <Fade direction='up' delay={300} duration={1000} triggerOnce>
        <Element name="home" className='home'>
          <div className="content">
            <p className="name">Hi, my name is <br/> </p>
            <span className='username'>Isaac Msiza.</span>
            <h1> I'm a <span><TypingEffect sentences={sentences} speed={100} /></span></h1>
            <p className="skill">
              I’m a Full Stack Developer specializing in building modern, high-performance web applications using <br />
              <span>React</span> and <span>Next.js</span>. I develop clean, responsive user interfaces and connect them to robust backend <br />
              systems built with <span>Spring Boot</span> and REST APIs. I work with databases such as <span>PostgreSQL</span>, <span>MySQL</span>, <br />
              and <span>MongoDB</span>, and I also integrate Firebase for authentication and backend services. <br />
              I focus on building scalable, secure, and efficient applications that solve real-world problems and <br />
              deliver smooth user experiences.
            </p>
            <a href="#">Check out more!</a>
          </div>
        </Element>
        <Element name="about" className="aboutSection">
          <h2><span>01.</span>About Me <hr className='aboutLine' /></h2>
          <div className='aboutContent'>
            <div className='text'>
              <p>
                <a class="sub-section">
                  I'm a Full Stack Developer with a strong specialization in <span>Spring Boot backend development</span> 
                  and modern frontend development using <span>React.js</span> and <span>Next.js</span>. I enjoy building 
                  scalable, secure, and high-performance web applications, with a particular focus on designing robust 
                  backend systems, RESTful APIs, authentication workflows, and database-driven solutions.
                </a>
                  
                <a class="sub-section"> 
                  My backend expertise includes developing enterprise-grade applications with <span>Spring Boot</span>, 
                  <span>Java</span>, <span>PostgreSQL</span>, <span>MySQL</span>, <span>MongoDB</span>, and API integrations. 
                  On the frontend, I build responsive and user-friendly interfaces using <span>React.js</span>, 
                  <span>Next.js</span>, <span>JavaScript</span>, <span>HTML</span>, and <span>CSS</span>. This combination
                  allows me to deliver complete end-to-end solutions, from database design and business logic to intuitive
                  user experiences.
                </a> 
                
                <a class="sub-section"> 
                  With practical experience in web development and full-stack application design, I have built projects such 
                  as <span>Accommodation Booking Platforms</span>, <span>Appointment Scheduling Systems</span>, <span>Transport 
                  Permit Management Solutions</span>, and <span>Real-Time Data-Driven Applications</span>. These projects have
                  strengthened my ability to architect scalable systems, solve complex technical challenges, and create 
                  software that addresses real business needs.
                </a> 

                <a class="sub-section"> 
                  I am passionate about <span>Clean Architecture</span>, <span>Maintainable Code</span>, and <span>Continuous 
                  Learning</span>. My goal is to contribute to innovative teams and impactful products while growing as both 
                  a <span>Spring Boot Backend Developer</span> and a <span>Full Stack Developer</span>.
                </a> 
              </p>
            </div>
            <div className='img'>
              <img src={myImage} alt="My Photo" />
              <p className='imageBackBorder'></p>
            </div>
          </div>
        </Element>
        <Element name="work" className="workSection">
          <h2><span>03.</span>Some of The Things I've Built <hr className='workLine' /></h2>
          {/*<div className='firstClass'>
            <p>Projects using CSS,HTML and JavaScript</p>
            <div className='javaProjects'>
              <div>
                <FontAwesomeIcon className='fontAwesomeIconFolder' icon={faFolder} />
                <a href='https://github.com/ITMsiza/vanillaJS-weather-app/tree/master'>
                  <FontAwesomeIcon className='fontAwesomeIconGit' icon={faGithub} />
                </a>
                <h6>
                  Weather App
                </h6>
                <p className='boxParagraph'>
                  Creating a weather app to deliver real-time updates, forecasts, and alerts,
                  helping users plan better, stay safe, and enjoy greater convenience.
                </p>
                <p className='footer'>
                  HTML CSS JAVASCRIPT
                </p>
              </div>
              <div>
                <FontAwesomeIcon className='fontAwesomeIconFolder' icon={faFolder} />
                <a href='https://itmsiza.github.io/to-do-list/'>
                  <FontAwesomeIcon className='fontAwesomeIconGit' icon={faGithub} />
                </a>
                <h6>
                  To Do List
                </h6>
                <p className='boxParagraph'>
                  Building a to-do list app to help users organize tasks efficiently, boost
                  productivity, manage time better, and stay focused on achieving goals.
                </p>
                <p className='footer'>
                  HTML CSS JAVASCRIPT
                </p>
              </div>
              <div>
                <FontAwesomeIcon className='fontAwesomeIconFolder' icon={faFolder} />
                <a href='https://github.com/ITMsiza/calculator'>
                  <FontAwesomeIcon className='fontAwesomeIconGit' icon={faGithub} />
                </a>
                <h6>
                  Calculator
                </h6>
                <p className='boxParagraph'>
                  Building a calculator app to provide users with a convenient tool for accurate
                  calculations, essential for everyday tasks, educational purposes, and professional work.
                </p>
                <p className='footer'>
                  HTML CSS JAVASCRIPT
                </p>
              </div>
              {showMore1 && (
                <>
                </>
              )}
            </div>
            <div className='button'>
              <button onClick={toggleShowMore1} className="show-more-button">
                {showMore1 ? 'Show Less' : 'Show More'}
              </button>
              <p className='buttonBackLayer'></p>
            </div>
          </div>*/}
          {/*<div className='secondClass'>
            <p>Projects using React</p>
            <div className='reactProjects'>
              <div >
                <FontAwesomeIcon className='fontAwesomeIconFolder' icon={faFolder} />
                <a href='https://github.com/ITMsiza/job-listings-and-filtering'>
                  <FontAwesomeIcon className='fontAwesomeIconGit' icon={faGithub} />
                </a>
                <h6>
                  Job Listings With Filtering
                </h6>
                <p className='boxParagraph'>
                  Building a job listings app with filtering to help users find relevant opportunities quickly,
                  improving job search efficiency and matching candidates to positions.
                </p>
                <p className='footer'>
                  REACT
                </p>
              </div>
              <div>
                <FontAwesomeIcon className='fontAwesomeIconFolder' icon={faFolder} />
                <a href='https://github.com/ITMsiza/quiz'>
                  <FontAwesomeIcon className='fontAwesomeIconGit' icon={faGithub} />
                </a>
                <h6>
                  Quiz
                </h6>
                <p className='boxParagraph'>
                  Building a quiz app to enhance learning and engagement, providing a fun,
                  interactive way to test knowledge and improve educational outcomes.
                </p>
                <p className='footer'>
                  REACT
                </p>
              </div>
              <div>
                <FontAwesomeIcon className='fontAwesomeIconFolder' icon={faFolder} />
                <a href='https://github.com/ITMsiza/music-player'>
                  <FontAwesomeIcon className='fontAwesomeIconGit' icon={faGithub} />
                </a>
                <h6>
                  Music Player
                </h6>
                <p className='boxParagraph'>
                  I built a music player to offer convenient, personalized
                  access to music for entertainment and enjoyment.
                </p>
                <p className='footer'>
                  REACT
                </p>
              </div>
              {showMore2 && (
                <>
                  <div>
                    <FontAwesomeIcon className='fontAwesomeIconFolder' icon={faFolder} />
                    <a href='https://github.com/ITMsiza/temperature-converter'>
                      <FontAwesomeIcon className='fontAwesomeIconGit' icon={faGithub} />
                    </a>
                    <h6>
                      Temperature Convertor
                    </h6>
                    <p className='boxParagraph'>
                      Building a temperature converter app simplifies converting between temperature units,
                      enhancing accuracy, convenience, and usability for educational, scientific, and everyday needs.
                    </p>
                    <p className='footer'>
                      REACT
                    </p>
                  </div>
                  <div>
                    <FontAwesomeIcon className='fontAwesomeIconFolder' icon={faFolder} />
                    <a href='#'>
                      <FontAwesomeIcon className='fontAwesomeIconGit' icon={faGithub} />
                    </a>
                    <h6>
                      Calculator
                    </h6>
                    <p className='boxParagraph'>
                      Building a calculator app to provide a quick, accurate calculations for everyday
                      tasks, enhancing convenience, efficiency, and mathematical proficiency.
                    </p>
                    <p className='footer'>
                      REACT
                    </p>
                  </div>
                  <div>
                    <FontAwesomeIcon className='fontAwesomeIconFolder' icon={faFolder} />
                    <a href='https://github.com/ITMsiza/portfolio'>
                      <FontAwesomeIcon className='fontAwesomeIconGit' icon={faGithub} />
                    </a>
                    <h6>
                      Portfolio
                    </h6>
                    <p className='boxParagraph'>
                      I built a portfolio to showcase my skills, experience, and accomplishments, creating a professional
                      online presence that attracts opportunities, clients, and employers, while enhancing my personal brand.
                    </p>
                    <p className='footer'>
                      REACT
                    </p>
                  </div>
                  <div>
                    <FontAwesomeIcon className='fontAwesomeIconFolder' icon={faFolder} />
                    <a href='#'>
                      <FontAwesomeIcon className='fontAwesomeIconGit' icon={faGithub} />
                    </a>
                    <h6>
                      To Do List
                    </h6>
                    <p className='boxParagraph'>
                      I built a to-do list app to enhance productivity, organization, and time management
                      by providing users with a simple, intuitive way to track and prioritize tasks.
                    </p>
                    <p className='footer'>
                      REACT
                    </p>
                  </div>
                  <div>
                    <FontAwesomeIcon className='fontAwesomeIconFolder' icon={faFolder} />
                    <a href='https://github.com/ITMsiza/weather-app'>
                      <FontAwesomeIcon className='fontAwesomeIconGit' icon={faGithub} />
                    </a>
                    <h6>
                      Weather App
                    </h6>
                    <p className='boxParagraph'>
                      Building a weather app to provide a real-time forecasts, alerts, and personalized
                      updates, enhancing safety, convenience, and integration with daily routines.
                    </p>
                    <p className='footer'>
                      REACT
                    </p>
                  </div>
                </>
              )}
            </div>
            <div className='button2'>
              <button onClick={toggleShowMore2} className="show-more-button">
                {showMore2 ? 'Show Less' : 'Show More'}
              </button>
              <p className='buttonBackLayer'></p>
            </div>
          </div>*/}
          <div className='secondClass'>
            <p>Full Stack Projects using Next js (React) And Spring Boot </p>
            <div className='reactProjects'>
              <div >
                <FontAwesomeIcon className='fontAwesomeIconFolder' icon={faFolder} />
                <a href='https://github.com/ITMsiza/Accommodation-Booking-System'>
                  <FontAwesomeIcon className='fontAwesomeIconGit' icon={faGithub} />
                </a>
                <h6>
                  SmartEase
                </h6>
                <p className='boxParagraph'>
                  Built a digital booking system for managing room availability, reservations, and user bookings
                </p>
                <p className='footer'>
                  Next js (REACT) And Spring Boot
                </p>
              </div>

               <div >
                <FontAwesomeIcon className='fontAwesomeIconFolder' icon={faFolder} />
                <a href='https://github.com/ITMsiza/smartcare-booking'>
                  <FontAwesomeIcon className='fontAwesomeIconGit' icon={faGithub} />
                </a>
                <h6>
                  Doctor Booking System
                </h6>
                <p className='boxParagraph'>
                  Built a SmartCare booking solution with dedicated dashboards for patients, doctors, 
                  and admins, enabling seamless bookings, availability management, and hospital oversight.
                </p>
                <p className='footer'>
                  Next js (REACT) And NodeJS
                </p>
              </div>
            
              {/*{showMore2 && (
                <>
                  <div>
                    <FontAwesomeIcon className='fontAwesomeIconFolder' icon={faFolder} />
                    <a href='https://github.com/ITMsiza/temperature-converter'>
                      <FontAwesomeIcon className='fontAwesomeIconGit' icon={faGithub} />
                    </a>
                    <h6>
                      Temperature Convertor
                    </h6>
                    <p className='boxParagraph'>
                      Building a temperature converter app simplifies converting between temperature units,
                      enhancing accuracy, convenience, and usability for educational, scientific, and everyday needs.
                    </p>
                    <p className='footer'>
                      REACT
                    </p>
                  </div>
                  <div>
                    <FontAwesomeIcon className='fontAwesomeIconFolder' icon={faFolder} />
                    <a href='#'>
                      <FontAwesomeIcon className='fontAwesomeIconGit' icon={faGithub} />
                    </a>
                    <h6>
                      Calculator
                    </h6>
                    <p className='boxParagraph'>
                      Building a calculator app to provide a quick, accurate calculations for everyday
                      tasks, enhancing convenience, efficiency, and mathematical proficiency.
                    </p>
                    <p className='footer'>
                      REACT
                    </p>
                  </div>
                  <div>
                    <FontAwesomeIcon className='fontAwesomeIconFolder' icon={faFolder} />
                    <a href='https://github.com/ITMsiza/portfolio'>
                      <FontAwesomeIcon className='fontAwesomeIconGit' icon={faGithub} />
                    </a>
                    <h6>
                      Portfolio
                    </h6>
                    <p className='boxParagraph'>
                      I built a portfolio to showcase my skills, experience, and accomplishments, creating a professional
                      online presence that attracts opportunities, clients, and employers, while enhancing my personal brand.
                    </p>
                    <p className='footer'>
                      REACT
                    </p>
                  </div>
                  <div>
                    <FontAwesomeIcon className='fontAwesomeIconFolder' icon={faFolder} />
                    <a href='#'>
                      <FontAwesomeIcon className='fontAwesomeIconGit' icon={faGithub} />
                    </a>
                    <h6>
                      To Do List
                    </h6>
                    <p className='boxParagraph'>
                      I built a to-do list app to enhance productivity, organization, and time management
                      by providing users with a simple, intuitive way to track and prioritize tasks.
                    </p>
                    <p className='footer'>
                      REACT
                    </p>
                  </div>
                  <div>
                    <FontAwesomeIcon className='fontAwesomeIconFolder' icon={faFolder} />
                    <a href='https://github.com/ITMsiza/weather-app'>
                      <FontAwesomeIcon className='fontAwesomeIconGit' icon={faGithub} />
                    </a>
                    <h6>
                      Weather App
                    </h6>
                    <p className='boxParagraph'>
                      Building a weather app to provide a real-time forecasts, alerts, and personalized
                      updates, enhancing safety, convenience, and integration with daily routines.
                    </p>
                    <p className='footer'>
                      REACT
                    </p>
                  </div>

                  
                </>
              )}*/}
            </div>
            <div className='button2'>
              <button onClick={toggleShowMore2} className="show-more-button">
                {showMore2 ? 'Show Less' : 'Show More'}
              </button>
              <p className='buttonBackLayer'></p>
            </div>
          </div>
        </Element>
        <Element name="contact" className="contactSection">
          <h4><span>04.</span>What's Next?</h4>
          <h1>Get In Touch</h1>
          <p>I'm currently looking for any opportunity, my inbox is always open.
            Whether you have a question or just want to say hi, I'll get back to you!
          </p>
          <div className='buttonAndBack'>
            <EmailButton email="itmsiza1994@gmail.com" />
            <p className='buttonBackLayer'></p>
          </div>
          <div className="brands2" >
            <a href='#'>
              <FontAwesomeIcon className="brandIcon" icon={['fab', 'facebook']} />
            </a>
            <a href='#'>
              <FontAwesomeIcon className="brandIcon" icon={['fab', 'instagram']} />
            </a>
            <a href='#'>
              <FontAwesomeIcon className="brandIcon" icon={['fab', 'linkedin-in']} />
            </a>
            <a href='https://github.com/ITMsiza?tab=repositories'>
              <FontAwesomeIcon className="brandIcon" icon={['fab', 'github']} />
            </a>
            <a href="https://www.youtube.com/@coconutkidsnurseryrhymes">
              <FontAwesomeIcon className="brandIcon" icon={['fab', 'youtube']} />
            </a>
          </div>
          <a href='#' className='CopyRight'>
            Designed & built by Isaac Msiza
          </a>
        </Element>
      </Fade>
    </section>
  );
  return (
    <>
      <Navbar mainContent={jsxContent} />
    </>
  );
}

export default App;

