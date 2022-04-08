import style from '../styles/Footer.module.sass';

export default function Footer () {
  return (
    <footer className={style.section_wrapper} id='contact'>
      <div className={style.content_wrapper}>
          <h3 className={style.main_header}>Did you want to talk to me?</h3>
          <p><span className={style.email_letters}>seimatsusaki@gmail.com</span>          </p>
      </div>
    </footer>
  )
}
