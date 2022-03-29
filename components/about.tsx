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
          <h1 className={style.section_header}>ABOUT ME</h1>
          <div className={style.items_wrapper}>
            <EduAndExpItem/>
            <SkillCertItem/>
            <HobbyInterestItem/>
          </div>
      </div>
    </div>
  )
}

const ItemFrame = (props: any) => {
  
  const header: string = props.header || '';
  const img: ImageInfo = props.imgInfo;

  return (
    <div className={style.about_item}>
      <div className={style.image_wrapper}>
        <Image
          src={img.src}
          alt={img.alt}
          height={img.height}
          width={img.width}
          layout='fixed'
        />
      </div>
      <h3 className={style.item_header}>{header}</h3>
      {props.children}
    </div>
  )
}

const EduAndExpItem = () => {
  const imgInfo: ImageInfo = {
    src: '/edu_and_exp.png',
    height: 50,
    width: 50,
    alt: 'Education and experience icon'
  }

  return (
    <ItemFrame
      header={'Education & Experience'}
      imgInfo={imgInfo}>
      <p>Sample</p>
    </ItemFrame>
  )
}

const SkillCertItem = () => {
  const imgInfo: ImageInfo = {
    src: '/skill_and_cert.png',
    height: 50,
    width: 50,
    alt: 'Education and experience icon'
  }

  return (
    <ItemFrame
      header={'Skills & Certificates'}
      imgInfo={imgInfo}>
      <p>Sample</p>
    </ItemFrame>
  )
}

const HobbyInterestItem = () => {
  const imgInfo: ImageInfo = {
    src: '/hobby_and_interest.png',
    height: 50,
    width: 50,
    alt: 'Education and experience icon'
  }

  return (
    <ItemFrame
      header={'Education & Experience'}
      imgInfo={imgInfo}>
      <p>Sample</p>
    </ItemFrame>
  )
}