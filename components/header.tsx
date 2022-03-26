import style from '../styles/Header.module.sass'
import Image from 'next/image'

export default function Header () {
  return (
    <nav className={style.nav}>
      <span className={style.logo_wrapper}>
        <Image alt='site-logo' 
          src='/site-logo.png'
          height={50} 
          width={50}
          />
      </span>
      <span className={style.menu_wrapper}>
        <a className={style.menu_item} href='#about'>About</a>
        <a className={style.menu_item} href='#project'>Projects</a>
        <a className={style.menu_item} href='#contact'>Contact</a>
      </span>
    </nav>
  )  
}
