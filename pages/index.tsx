import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.sass'
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
          height={70} 
          width={70}
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
    <div className={ styles['welcome-sec__wrapper']}>
      <div className={ styles['welcome-sec__image-wrapper']}>
        <Image alt='tool image'
          src='/tool.png'
          height={844}
          width={832}
          />
      </div>
        <p className={ styles['welcome-sec__greeting']}>Hello, I&apos;m Seimei.<br/>Software Engineer.</p>
    </div>
  )
}

const AboutMeSection = () => {
  return (
    <div className={am_style['aboutMe-sec__wrapper']}>
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
