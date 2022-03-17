import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.sass'
import hd_style from '../styles/Header.module.sass'

const Home: NextPage = () => {
  return (
    <>
      <Header/>
      <WelcomeSection/>
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

export default Home
