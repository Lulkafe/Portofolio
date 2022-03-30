import style from '../styles/Welcome.module.sass'
import Image from 'next/image'

export default function WelcomeSection () {
  return (
    <div className={ style.section_wrapper}>
      <div className= { style.wrapper_for_anime}>
        <div className={ style.image_wrapper}>
          <Image alt='tool image'
            src='/tool.png'
            height={844}
            width={832}
            />
        </div>
        <h1 className={ style.greeting}>Hello!, I&apos;m Seimei.<br/>Software Engineer.</h1>
      </div>
    </div>
  )
}