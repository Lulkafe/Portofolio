import style from '../styles/About.module.sass'
import Image from 'next/image'
import { ImageInfo } from './interface';

export default function AboutMeSection () {
  return (
    <div className={style.section_wrapper} id='about'>
      <section>
         <div className={style.skewed} />
      </section>
      <div className={style.content_wrapper}>
          <h1 className={style.header}>ABOUT ME</h1>
      </div>
    </div>
  )
}

const AboutItem = (props: any) => {
  
  const header: string = props.header || '';
  const img: ImageInfo = props.imgInfo;

  return (
    <div>
      <div>
        <Image
          src={img.src}
          alt={img.alt}
          height={img.height}
          width={img.width}
        />
      </div>
      <h3>{header}</h3>
      {props.children}
    </div>
  )
}
