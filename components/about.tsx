import style from '../styles/About.module.sass'
import Image from 'next/image'
import { ImageInfo } from './interface';
import { useState } from 'react';

export default function AboutMeSection () {

  return (
    <div className={style.section_wrapper} id='about'>
      <section>
         <div className={style.skewed} />
      </section>
      <div className={style.content_wrapper}>
          <h2 className={style.section_header}>ABOUT ME</h2>
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

  const [showVolExp, setShowVolExp] = useState(false);
  const imgInfo: ImageInfo = {
    src: '/edu_and_exp.png',
    height: 81,
    width: 91,
    alt: 'Education and experience icon'
  }

  return (
    <ItemFrame
      header={'Education & Experience'}
      imgInfo={imgInfo}>

      {/* Education */}
      <h4 className={style.year_header}><span className={style.highlight}>2008-2012</span></h4>
      <h5 className={style.org_name}>🇺🇸 University of Maine at Fort Kent</h5>
      <h6 className={style.title_name}>Bachelor of Science in Computer Applications</h6>

      <h4 className={style.year_header}><span className={style.highlight}>2013-2015</span></h4>
      <h5 className={style.org_name}>🇺🇸 University of San Francisco</h5>
      <h6 className={style.title_name}>Master of Science in Computer Science</h6>
      <hr className={style.divider}/>

      {/* Work Experience */}
      <h4 className={style.year_header}><span className={style.highlight}>2015 Summer</span></h4>
      <h5 className={style.org_name}>🇺🇸 OpenDNS</h5>
      <h6 className={style.title_name}>Data Visualization Engineer (intern)</h6>
    
      <h4 className={style.year_header}><span className={style.highlight}>2016 December - Current</span></h4>
      <h5 className={style.org_name}>🇺🇸 TSG USA</h5>
      <h6 className={style.title_name}>Software System Engineer</h6>
      <hr className={style.divider}/>

      {/* Volunteer Experience (Option) */}
      <div>
        {/* TODO: list Vulunteer experience here */}
      </div>
      <button className={style.toggle_button} type='button'>See volunteer experience</button>

    </ItemFrame>
  )
}

const SkillCertItem = () => {
  const imgInfo: ImageInfo = {
    src: '/skill_and_cert.png',
    height: 80,
    width: 91,
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
    height: 80,
    width: 80,
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