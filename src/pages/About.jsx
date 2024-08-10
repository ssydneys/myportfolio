import { NavLink } from 'react-router-dom';
import { FaHtml5, FaJs, FaNodeJs, FaReact, FaSquareGit, FaFigma } from "react-icons/fa6";

const About = () => {
    return (
      <main className="home-container">
        <section className="home-hero home-subsection">
          {/* <h2 className="text-4xl mb-2">Hi, I'm Sydney</h2> */}
          <p className="subsection-paragraph">
          As a full-stack developer, I enjoy tackling both front-end and back-end challenges, but I'm particularly excited by the intersection of technology and creativity.</p>
          <p className="skillHead"></p><br />
          <div className="skillWrap">
          <div className="skillsContainer">
          <div className="header"><FaHtml5 className="skillIcon" />HTML5/CSS</div><br />
          <div className="header"><FaJs className="skillIcon" />Javascript</div><br />
          <div className="header"><FaNodeJs className="skillIcon" />Node.js</div><br />
          </div>          
          <div className="skillsContainer">
          <div className="header"><FaReact className="skillIcon" />React</div><br />
          <div className="header"><FaSquareGit className="skillIcon" />Git</div><br />
          <div className="header"><FaFigma className="skillIcon" />Figma</div><br />
          </div></div>
          {/* <ul>
            <li><FaHtml5 className="skillIcon" />HTML5/CSS</li>
            <li>Javascript</li>
            <li>Node.js</li>
            <li>React</li>
            <li></li>
          </ul> */}
          <br /><br />
          <p className="subsection-paragraph">Like to know more?</p>
          <NavLink to="/contact">
          Say hi
          </NavLink>
        </section>
        {/* <section className="overview home-subsection">
          <h3 className="subsection-intro-header">Introduction</h3>
          <h2 className="subsection-big-header">Overview.</h2>
          <p className="subsection-paragraph">{professionalSummary}</p>
          <NavLink to="/about">
          Learn More About Me
          </NavLink>
        </section>
        <section className="projects home-subsection">
          <h3 className="subsection-intro-header">My Works</h3>
          <h2 className="subsection-big-header">Projects.</h2>
          <p className="subsection-paragraph">I have worked on multiple project, the projects I have worked on demonstrate my skills and experience through real-life examples of my work. Each project is briefly described and includes links to code repositories that showcase my ability to tackle challenging problems. If you are interested in my work click on the link below to go to the project page.</p>
          <NavLink to="/projects">
          View Projects
          </NavLink>
        </section> */}
      </main>
    )
  }
//   return (
//     <main className="about-container">
//        <section className='about-content-container'>
//        {/* <section className='image-container'>
//           {/* Replace this placeholder image and alt tag with a professional head shot */}
//           {/* <img className='headShot' src={PlaceholderImage} alt="placeholder image" />
//         </section> */}
//         <section className='description-container'>
//           <h2 className='text-xl font-medium'>I'm Sydney, a junior full-stack developer.
//             {/* I&apos;m {firstName}, a {jobTitle} working for, {company} on {mainDuty} located in, {jobLocation} */}</h2>
//           {/* <p>{briefJobDescription}</p>
//           <p>{careerObjective}</p>
//           <p>{personalLife}</p> */}
//           <p className='mb-4'>If you're interested in my work, reach out to me!</p>
//           <NavLink to="/contact">Say hi</NavLink>
//         </section>
//       </section>
//     </main>
//   )
// }
 export default About;