import style from '../styles/Project.module.sass'
import { ProjectInfo } from './interface'

export default function ProjectSection () {

  return (
    <div className={style.section_wrapper}>
      <h1>Projects</h1>
      <ProjectItem project={mockProject}/>
      <ProjectItem project={mockProject}/>
      <ProjectItem project={mockProject}/>
    </div>
  )
}

const ProjectItem = (props: any) => {
  const project: ProjectInfo = props.project;
  const isMyProject = project.url.github !== undefined;
 
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
      <p>{project.description.main}</p>
      <hr className={style.divider}/>
      <h4>Keywords</h4>
      <div className={style.keywords_wrapper}>
        {/*  */}
      </div>
        {
          isMyProject?
          <div className={style.button_wrapper}>
            <a className={style.button_website}>See Demo</a>
            <a className={style.button_github}>Github</a>
          </div>
          :<a className={style.button_website}>Visit Website</a>
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
      main: 'This is my sample project. Just used for development purpose',
      keywords: ['React', 'Next.js', 'Sass']
    },
    url: {
      website: '',
      github: ''
    }
  }

const projects: ProjectInfo[] = [

]