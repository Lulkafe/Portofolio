import style from '../styles/Footer.module.sass';
import Image from 'next/image';

export default function Footer () {
  return (
    <footer className={style.section_wrapper} id='contact'>
      <section>
         <div className={style.skewed} />
      </section>
      <div className={style.content_wrapper}>
        <h2 className={style.main_header}><span className={style.main_header_letter}>CONTACT</span></h2>
        <p><span className={style.email_letters}>seimatsusaki@gmail.com</span>          </p>
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
