import style from '../styles/Header.module.sass'
import Image from 'next/image'
import { useContext } from 'react'
import { AppContext } from './reducer';
import { ACTION } from './reducer';
import $ from 'jquery';


export default function Header () {

  const { state, dispatch } = useContext(AppContext)
  const onMobileMenuClick = (e: any) => {
    e.stopPropagation();

    if (dispatch)
      dispatch({ type: ACTION.MENU.VISIBLE });
  }
  const scrollTo = (id: string) => (e: any) => {
    e.stopPropagation();

    $('html, body').animate({
        scrollTop: $(id)?.offset()?.top
    }, 500);
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
        <a className={style.menu_item} onClick={scrollTo('#about')}>About</a>
        <a className={style.menu_item} onClick={scrollTo('#project')}>Projects</a>
        <a className={style.menu_item} onClick={scrollTo('#contact')}>Contact</a>
      </span>

      {/* For smartphones or small screen devices */}
      <span className={style.hamberger_menu_wrapper}>
        <div className={style.hamberger_menu_icon} onClick={onMobileMenuClick}>
          <span className={style.hamberger_line}></span>
          <span className={style.hamberger_line}></span>
          <span className={style.hamberger_line}></span>
        </div>
        <div className={`${style.menu_list_mobile} ${state && state.isMenuClosed? '' : style.show}`} >
          <a className={style.menu_item_mobile}  
            onClick={(e: any) => { onMobileMenuClick(e); scrollTo('#about')(e); }}>About</a>
          <a className={style.menu_item_mobile}  
            onClick={(e: any) => { onMobileMenuClick(e); scrollTo('#project')(e); }}>Projects</a>
          <a className={style.menu_item_mobile}  
            onClick={(e: any) => { onMobileMenuClick(e); scrollTo('#contact')(e); }}>Contact</a>
        </div>
      </span>
    </nav>
  )  
}
