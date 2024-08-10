import { FaGithubAlt } from "react-icons/fa6";
import mwaSS from '../components/mwa.png';

// Replace the projects inside the myProjects array with your own projects. Right now the array has sample data. You can add as many projects as you want. Each project should be an object with the following
// properties:
// - title: The title of the project
// - description: A description of the project
// - repositoryLink: A link to the GitHub repository of the project
// You can also add more properties if you want to display more information about your projects.
const myProjects = [
  {
    title: 'Mini Weather App',
    description: 'A React mini weather app.',
    image: mwaSS,
    repositoryLink: 'https://github.com/ssydneys/mini-weather-app',
  },
  {
    title: 'Music Player',
    description: 'A React web music player.',
    icon: <FaGithubAlt className="icon" />,
    repositoryLink: 'https://github.com/ssydneys/Path2Tech-Capstone-Project/tree/main/music_player',
  },
];
const Projects = () => {
  return (
    <main className="projects-container">
      {myProjects.map((project) => (
        <section key={project.title} className="project-item border border-2 rounded-lg">
          {/* <section className="project-image-container"> */}
          {/* <img src={project.image} alt="Mini weather app" /> */}
          <section className="project-image-container">
            {project.image ? (
              <img src={project.image} alt={project.title} />
            ) : (
              project.icon
            )}
          </section><br />
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-lg">{project.description}</p><br />
          <p><a href={project.repositoryLink} target="_blank">Code</a> </p>
        </section>
      ))}
    </main>
  )
}

export default Projects