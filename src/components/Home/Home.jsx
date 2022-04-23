import React from 'react'
import styles from './Home.module.css'
import profilePic from '../../assets/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouseChimney, faUser, faDiagramProject, faScrewdriverWrench, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import resume from '../../assets/FrancoAngulo.pdf'
import pokemon from '../../assets/pokemon2.jpg'
import weather from '../../assets/weather.jpg'
import javascript from '../../assets/javascript.png'
import react from '../../assets/react.png'
import redux from '../../assets/redux.png'
import node from '../../assets/node.webp'
import sql from '../../assets/sql.png'
import postgresql from '../../assets/postgresql.webp'
import sequelize from '../../assets/sequelize.webp'



function Home() {
      return (
            <div >
                  <div className={styles.navigation}>
                        <a href="#home"><button className={styles.goHome}>
                              <FontAwesomeIcon icon={faHouseChimney} />
                        </button></a>
                        <a href="#about"><button className={styles.goAbout}>
                              <FontAwesomeIcon icon={faUser} />
                        </button></a>
                        <a href="#projects"><button className={styles.goProjects}>
                              <FontAwesomeIcon icon={faDiagramProject} />
                        </button></a>
                        <a href="#skills"><button className={styles.goSkills}>
                              <FontAwesomeIcon icon={faScrewdriverWrench} />
                        </button></a>
                        {/* <a href="#contact"><button className={styles.goContact}>
                        <FontAwesomeIcon icon={faAddressCard} />
                  </button></a> */}
                  </div>
                  <div className={styles.titleContainer} id='home'>
                        <span className={styles.title}>Hi, my name is <span className={styles.name}>Franco</span> <br />
                              I'm a Full Stack Web Developer</span>
                        <a href='#about' className={styles.aboutLink}><button className={styles.aboutMe}>About</button></a>
                        <div className={styles.contactButtons}>
                              <a target="_blank" href='https://www.linkedin.com/in/franco-angulo/' >
                                    <FontAwesomeIcon icon={faLinkedin} className={styles.contact} />
                              </a>
                              <a target="_blank" href='https://github.com/francoa7' >
                                    <FontAwesomeIcon icon={faGithub} className={styles.contact} />
                              </a>
                              <a target="_blank" href='mailto:francoangulo2001@gmail.com' >
                                    <FontAwesomeIcon icon={faEnvelope} className={styles.contact} />
                              </a>
                        </div>
                  </div>
                  <div className={styles.aboutContainer} id='about'>
                        <h2 className={`${styles.subtitle} ${styles.light}`}>About Me</h2>
                        <div className={styles.myDescription}>
                              <img src={profilePic} alt="my photo" className={styles.profilePic} />
                              <span className={styles.about}>The world of programming fascinates me. I always seek to learn and I love the idea of being able to live from what I am passionate about. This is why I trained as a Full Stack Developer. Always responsible, well predisposed and committed to my tasks.</span>
                        </div>
                        <a href={resume} target="_blank">
                              <button className={styles.viewResume}>View Resume</button>
                        </a>
                  </div>
                  <div className={styles.projectsContainer} id='projects'>
                        <h2 className={` ${styles.subtitle} ${styles.dark}`}>Projects</h2>
                        <div className={styles.project}>
                              <div className={styles.projectDescription}>
                                    <h3 className={`${styles.projectTitle} ${styles.dark}`}>Pokemon App</h3>
                                    <span className={styles.projectExplanation}>Single Page Application using React for the Front End and Redux as state management.
                                          The SPA consumes data from an API (pokeapi.co) through a Back End developed in NodeJS using Express, adding new features to the original API.
                                    </span>
                                    <div className={styles.projectButtons}>
                                          <a href="https://pokemon-the-wiki.vercel.app" target="_blank">
                                                <button className={`${styles.seeLive}`}>See Live </button>
                                          </a>
                                          <a href="https://github.com/francoa7/PI-Pokemon-main" target="_blank">
                                                <button className={`${styles.sourceCode}`}> Source Code</button>
                                          </a>
                                    </div>
                              </div>
                              <a href="https://pokemon-the-wiki.vercel.app/" target="_blank">
                                    <img src={pokemon} alt="project capture" className={styles.projectImage} />
                              </a>
                        </div>  <div className={styles.project}>
                              <div className={styles.projectDescription}>
                                    <h3 className={`${styles.projectTitle} ${styles.dark}`}>Weather App</h3>
                                    <span className={styles.projectExplanation}>Simple SPA that shows the climate for different cities, bringing the information from an external API (https://openweathermap.org/api), searching them by names
                                    </span>
                                    <div className={styles.projectButtons}>
                                          <a href="https://weather-app-francoa7.vercel.app/" target="_blank">
                                                <button className={`${styles.seeLive}`}>See Live </button>
                                          </a>
                                          <a href="https://github.com/francoa7/weather-app" target="_blank">
                                                <button className={`${styles.sourceCode}`}> Source Code</button>
                                          </a>
                                    </div>
                              </div>
                              <a href="https://weather-app-francoa7.vercel.app/" target="_blank">
                                    <img src={weather} alt="project capture" className={styles.projectImage} />
                              </a>
                        </div>
                  </div>
                  <div className={styles.skillsContainer} id="skills">
                        <h2 className={styles.skillsTitle}>SKILLS</h2>
                        <ul className={styles.skillsList}>
                              <li className={styles.skill}><img src={javascript} />JavaScript</li>
                              <li className={styles.skill}><img src={react} /> React</li>
                              <li className={styles.skill}><img src={redux} />Redux</li>
                              <li className={styles.skill}><img src={node} />Node - Express</li>
                              <li className={styles.skill}><img src={sql} />SQL</li>
                              <li className={styles.skill}><img src={postgresql} />PostgreSQL</li>
                              <li className={styles.skill}><img src={sequelize} />Sequelize</li>
                        </ul>
                  </div>
                  {/* <div className={styles.contactContainer} id="contact">
                        <form action="">

                        </form>

                  </div> */}

            </div>
      )
}

export default Home