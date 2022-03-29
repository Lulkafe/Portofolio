import style from '../styles/Footer.module.sass';

export default function Footer () {
  return (
    <footer className={style.section_wrapper} id='contact'>
      <section>
         <div className={style.skewed} />
      </section>
      <div className='content_wrapper'>
          <p>Contact: <span>seimatsusaki@gmail.com</span></p>
      </div>
    </footer>
  )
}
