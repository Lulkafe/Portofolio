import style from '../styles/Welcome.module.sass'
import Image from 'next/image'

export default function WelcomeSection () {
  return (
    <div className={ style.section_background}>
      <div className={ style.section_wrapper}>
        <div className={ style.wrapper_for_anime}>
          <div className={ style.image_wrapper}>
            <Image 
              alt='Tool image for greeting'
              src='/tool.png'
              height={844}
              width={832}
              />
          </div>
          <div className={style.greeting_container}>
            <h1 className={style.greeting_main}>Hello, I&apos;m Seimei.<br/>Software Engineer.</h1>
            <h2 className={style.greeting_sub}>From Embedded system<br/> to Web development</h2>
          </div >
        </div>
      </div>
    </div>
  )
}