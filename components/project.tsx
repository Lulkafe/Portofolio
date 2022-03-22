import style from '../styles/Project.module.sass'
import { ProjectInfo } from './interface'

export default function ProjectSection () {

  return (
    <div className={style.section_wrapper}>
      <h1 className={style.header}>Projects</h1>
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
      <div className={style.image_wrapper}>
        {/* 
        <Image
          src={project.img.url}
          alt={project.img.alt}
          height={project.img.height}
          width={project.img.width}
        /> 
        */}
      </div>
      <p className={style.paragraph}>{project.description.main}</p>
      <hr className={style.divider}/>
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
        {
          /* My Projects: two buttons. 
             Other projects (e.g. volunteer): one button  */
          isMyProject?
          <div className={style.button_wrapper}>
            {   demoAvailable &&
                <a href='#'>
                    <button className={style.button_demo}>See Demo</button>
                </a>
            }
            {   project.url.github &&
                <a href='#'>
                    <button 
                        className={`${style.button_github} ${demoAvailable? '' : style.button_long}`}
                        >Github
                    </button>
                </a>
            }
          </div>
          :<a href='#'>
              <button className={style.button_website}>Visit Website</button>
          </a>
        }
    </div>
  )
}

/****  Project info ****/
const mockProject: ProjectInfo = {
    img: {
      src: '',
      height: 50,
      width: 50,
      alt: 'test'
    },
    description: {
      header: 'Project Sample',
      main: 'Interactive calculator for binary manipulation. Made for embedded system projects (e.g. to calculate register values visually)',
      keywords: ['React', 'Next.js', 'Sass', 'Webpack', 'Something great']
    },
    url: {
      website: '',
      github: ''
    }
  }

const projects: ProjectInfo[] = [
    mockProject,
    mockProject,
    mockProject,
]