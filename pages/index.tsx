import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import wc_style from '../styles/Welcome.module.sass'
import hd_style from '../styles/Header.module.sass'
import am_style from '../styles/About.module.sass'

interface ImageInfo {
  url: string,
  height: number,
  width: number 
  alt: string
}

const Home: NextPage = () => {
  return (
    <>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1'></meta>
        </Head>
        <Header/>
        <WelcomeSection/>
        <AboutMeSection/>
        <ProjectSection/>
        <Footer/>
    
    </>
  )
}


const Header = () => {
  return (
    <nav className={hd_style.nav}>
      <span className={hd_style.logo_wrapper}>
        <Image alt='site-logo' 
          src='/site-logo.png'
          height={50} 
          width={50}
          />
      </span>
      <span className={hd_style.menu_wrapper}>
        <a className={hd_style.menu_item} href='#'>About</a>
        <a className={hd_style.menu_item} href='#'>Projects</a>
        <a className={hd_style.menu_item} href='#'>Contact</a>
      </span>
    </nav>
  )  
}

const WelcomeSection = () => {
  return (
    <div className={ wc_style.section_wrapper}>
      <div className= { wc_style.wrapper_for_anime}>
        <div className={ wc_style.image_wrapper}>
          <Image alt='tool image'
            src='/tool.png'
            height={844}
            width={832}
            />
        </div>
        <p className={ wc_style.greeting}>Hello, I&apos;m Seimei.<br/>Software Engineer.</p>
      </div>
    </div>
  )
}

const AboutMeSection = () => {
  return (
    <div className={am_style.section_wrapper}>
      <section>
         <div className={am_style.skewed} />
      </section>
      <h1 className={am_style.header}>ABOUT ME</h1>
    </div>
  )
}

const AboutItemContainer = (props: any) => {
  
  const header: string = props.header || '';
  const img: ImageInfo = props.imgInfo;

  return (
    <div>
      <div>
        <Image
          src={img.url}
          alt={img.alt}
          height={img.height}
          width={img.width}
        />
      </div>
      <h3>{header}</h3>
      {props.children}
    </div>
  )
}

const ProjectSection = () => {
  return (
    <div>

    </div>
  )
}


const ProjectItem = () => {
  return (
    <div>

    </div>
  )
}

const Footer = () => {
  return (
    <footer>

    </footer>
  )
}

export default Home
