import style from '../styles/Header.module.sass'
import Image from 'next/image'
import { useState } from 'react'

export default function Header () {

  const [showMenu, setShowMenu] = useState(true);
  const onMenuClick = (e: any) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  }

  return (
    <nav className={style.nav}>
      <span className={style.logo_wrapper}>
        <Image alt='site-logo' 
          src='/site-logo.png'
          height={50} 
          width={50}
          />
      </span>

      {/* For Large tablets or desktops  */}
      <span className={style.menu_wrapper}>
        <a className={style.menu_item} href='#about'>About</a>
        <a className={style.menu_item} href='#project'>Projects</a>
        <a className={style.menu_item} href='#contact'>Contact</a>
      </span>

      {/* For smartphones or small screen devices */}
      <span className={style.hamberger_menu_wrapper}>
        <div className={style.hamberger_menu_icon} onClick={onMenuClick}>
          <span className={style.hamberger_line}></span>
          <span className={style.hamberger_line}></span>
          <span className={style.hamberger_line}></span>
        </div>
        <div className={`${style.menu_list_mobile} ${showMenu? style.show : ''}`} >
          <a className={style.menu_item_mobile} href='#about' onClick={onMenuClick}>About</a>
          <a className={style.menu_item_mobile} href='#project' onClick={onMenuClick}>Projects</a>
          <a className={style.menu_item_mobile} href='#contact' onClick={onMenuClick}>Contact</a>
        </div>
      </span>
    </nav>
  )  
}
