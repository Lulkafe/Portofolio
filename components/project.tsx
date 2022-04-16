import style from '../styles/Project.module.sass'
import { ProjectInfo } from './interface'
import Image from 'next/image'

export default function ProjectSection () {

  return (
    <div className={style.section_background}>
      <div className={style.section_wrapper} id='project'>
        <h2 className={style.section_header}>
          <span className={style.section_header_letters}>PROJECTS</span></h2>
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
    </div>
  )
}

const ProjectItem = (props: any) => {
  const project: ProjectInfo = props.project;
  const isMyProject = project.url.github !== undefined;
  const demoAvailable = project.url.website !== undefined;
 
  return (
    <div className={style.project_container} data-aos="fade-up"  data-aos-duration="1000">

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
      main: 'A simple calculator to do binary manipulation in a visual way. \
             For example, instead of manually typing a value, \
             the user directly can manipulate each bit by a click. \
             I developed this for embedded system projects (e.g. to calculate values assigned to registers).',
      keywords: ['React', 'Typescript', 'Webpack', 'CSS', 'jest']
    },
    url: {
      website: 'https://lulkafe.github.io/BinaryCalc/',
      github: 'https://github.com/Lulkafe/BinaryCalc'
    }
}

const TokenizerProject: ProjectInfo = {
   img: {
      src: '/screenshot-CopyTokenizer.png',
      height: 150,
      width: 220,
      alt: 'Screenshot of BinaryCalc app'
    },
    description: {
      header: 'CopyTokenizer',
      main: 'A web app that makes copying text easier. the app takes user text as \
            input and generates tokens. When the user clicks one, the corresponding text is copied to clipboard.\
            So, the user can simply copy the text by a single click.',
      keywords: ['React', 'Typescript', 'Webpack', 'Sass']
    },
    url: {
      website: 'https://lulkafe.github.io/CopyTokenizer/',
      github: 'https://github.com/Lulkafe/CopyTokenizer'
    }
}

const ChatAppProject: ProjectInfo = {
   img: {
      src: '/screenshot-ChatApp.png',
      height: 150,
      width: 220,
      alt: 'Screenshot of BinaryCalc app'
    },
    description: {
      header: 'S-CHAT',
      main: 'A simple chat app that does not require registration. \
             User conversations are kept up to only one hour. \
             This app is designed for an occasional use. For example, when the user does not leave logs or \
             does not want to add someone to his/her daily-use communication app as a friend but need to chat with him/her',
      keywords: ['React', 'Typescript', 'Webpack', 'Sass', 'Socket.io', 'Node.js', 'Express.js', 'Docker', 'jest']
    },
    url: {
      website: 'https://lulkafe.github.io/CopyTokenizer/',
      github: 'https://github.com/Lulkafe/ChatApp'
    }
}

const PortfolioProject: ProjectInfo = {
   img: {
      src: '/screenshot-ChatApp.png',
      height: 150,
      width: 220,
      alt: 'Screenshot of my portfolio page'
    },
    description: {
      header: 'My portfolio',
      main: 'Yes, this is what you see right now. I made it from scratch. \
             except social media icons, I designed and made everything by myself.',
      keywords: ['React', 'Typescript', 'Next.js', 'Sass']
    },
    url: {
      github: 'https://github.com/Lulkafe/ChatApp'
    }
}

const projects: ProjectInfo[] = [
    ChatAppProject,
    CalcProject,
    TokenizerProject
]
