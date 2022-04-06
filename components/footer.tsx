import style from '../styles/Footer.module.sass';

export default function Footer () {
  return (
    <footer className={style.section_wrapper} id='contact'>
      <section>
         <div className={style.skewed} />
      </section>
      <div className={style.content_wrapper}>
          <h3>Did you want to talk to me?</h3>
          <p>Contact me at <span className={style.email_letters}>seimatsusaki@gmail.com</span></p>
      </div>
    </footer>
  )
}
