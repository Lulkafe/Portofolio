import style from '../styles/Footer.module.sass';
import Image from 'next/image';
import { useRef } from 'react';

export default function Footer () {

  const emailAddress = 'seimatsusaki@gmail.com'
  const animeClass = style.appear_and_fadeout;
  const popupRef = useRef<HTMLSpanElement>(null);
  const onClickEmailAddress = (e: any) => {
        console.log('hello')
        e.stopPropagation();
        navigator.clipboard.writeText(emailAddress);
        popupRef?.current?.classList.add(animeClass);
    }
    const onAnimetionEnd = (e: any) => {
        e.stopPropagation();
        popupRef?.current?.classList.remove(animeClass);
    }

  return (
    <footer className={style.section_wrapper} id='contact'>
      <section>
         <div className={style.skewed} />
      </section>
      <div className={style.content_wrapper}>
        <h2 className={style.main_header}><span className={style.main_header_letter}>CONTACT</span></h2>
        <p className={style.email}>
          <span className={style.email_letters} 
            onClick={onClickEmailAddress}
            onAnimationEnd={onAnimetionEnd}>{emailAddress}
            <span className={style.email_tooltip} ref={popupRef}>Copied!</span>
          </span>
        </p>
      </div>
      <div className={style.image_wrapper}>
        <a href='https://github.com/Lulkafe' className={style.sns_anchor}>
          <Image
            width={32}
            height={32}
            alt={'Github icon'}
            src={'/Github-Mark-120px-plus.png'}
          />
        </a>
        <a href='https://www.linkedin.com/in/smatsusaki/' className={style.sns_anchor}>
          <Image
            width={32}
            height={32}
            alt={'Linkedin icon'}
            src={'/linkedin-icon.png'}
          />
         </a>
      </div>
    </footer>
  )
}
