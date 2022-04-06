import style from '../styles/Project.module.sass'
import { ProjectInfo } from './interface'
import Image from 'next/image'

export default function ProjectSection () {

  return (
    <div className={style.section_wrapper} id='project'>
      <h2 className={style.header}>PROJECTS</h2>
      <div className={style.content_wrapper}>
        {
            projects.map((project: ProjectInfo, i) => {
                return (
                    <ProjectItem 
                        key={`project-item-${i}`} 
                        project={project}
                    />        
                )
            })
        }
      </div>
    </div>
  )
}

const ProjectItem = (props: any) => {
  const project: ProjectInfo = props.project;
  const isMyProject = project.url.github !== undefined;
  const demoAvailable = project.url.website !== undefined;
 
  return (
    <div className={style.project_container}>

      {/* Header Image */}
      <div className={style.image_wrapper}>
        <Image
          src={project.img.src}
          alt={project.img.alt}
          height={project.img.height}
          width={project.img.width}
        /> 
      </div>

      {/* Project description */}
      <h3 className={style.project_header}>{project.description.header}</h3>
      <p className={style.project_paragraph}>{project.description.main}</p>

      <hr className={style.divider}/>

      {/* Keywords (tech stack) */}
      <h4 className={style.keywords_header}>Keywords</h4>
      <div className={style.keywords_wrapper}>
        {
            project.description.keywords.map((keyword: string) => {
                return (
                    <span
                        className={style.keyword} 
                        key={`keyword-${Math.random()}`}>
                        {keyword}
                    </span>
                )
            })
        }
      </div>
        { /* Link buttons */
          isMyProject?
            <div className={style.button_wrapper}>
              { 
                  demoAvailable &&
                  <a href={project.url.website}>
                      <button className={style.button_demo}>See Demo</button>
                  </a>
              }
              {   
                  project.url.github &&
                  <a href={project.url.github}>
                      <button 
                          className={`${style.button_github} ${demoAvailable? '' : style.button_long}`}
                          >Github
                      </button>
                  </a>
              }
            </div>
          :
            <a href={project.url.website}>
              <button className={style.button_website}>Visit Website</button>
            </a>
        }
    </div>
  )
}

/** Real Project Info */
const CalcProject: ProjectInfo = {
   img: {
      src: '/screenshot-binCalc.png',
      height: 150,
      width: 220,
      alt: 'Screenshot of BinaryCalc app'
    },
    description: {
      header: 'Binary Calculator',
      main: 'A simple calculator to do binary manipulation dynamically. Made for embedded system projects (e.g. to calculate register values visually)',
      keywords: ['React', 'Typescript', 'CSS', 'Webpack']
    },
    url: {
      website: 'https://lulkafe.github.io/BinaryCalc/',
      github: 'https://github.com/Lulkafe/BinaryCalc'
    }
}

const projects: ProjectInfo[] = [
    CalcProject
]
