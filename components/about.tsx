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

//Write education and experience here
const EduAndExpItem = () => {

  const [showVolExp, setShowVolExp] = useState(false);
  const onClick = (e: any) => {
    e.stopPropagation()
    setShowVolExp(!showVolExp);
  }
  const buttonText = `${showVolExp? 'Hide' : 'Show'} volunteer experience`;
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
      <h5 className={style.org_name}>🎓 <a href='https://www.umfk.edu/'>University of Maine at Fort Kent</a></h5>
      <h6 className={style.title_name}>Bachelor of Science in Computer Applications</h6>

      <h4 className={style.year_header}><span className={style.highlight}>2013-2015</span></h4>
      <h5 className={style.org_name}>🎓 <a href='https://www.usfca.edu/'>University of San Francisco</a></h5>
      <h6 className={style.title_name}>Master of Science in Computer Science</h6>
      <hr className={style.divider}/>

      {/* Work Experience */}
      <h4 className={style.year_header}><span className={style.highlight}>2015 Jun - Aug</span></h4>
      <h5 className={style.org_name}>🇺🇸 <a href='https://www.opendns.com/'>OpenDNS</a></h5>
      <h6 className={style.title_name}>Data Visualization Engineer (intern)</h6>
    
      <h4 className={style.year_header}><span className={style.highlight}>2016 Dec - Current</span></h4>
      <h5 className={style.org_name}>🇺🇸 <a href='https://www.tsg-globals.com/overview_tsgusa/index_e.html'>TSG USA</a></h5>
      <h6 className={style.title_name}>Software System Engineer</h6>
      <hr className={style.divider}/>

      {/* Volunteer Experience (Optional) */}
      <div className={`${style.volunteer_part} ${showVolExp? '' : style.hide}`}>
        <h4 className={style.year_header}><span className={style.highlight}>2016 Jul - Oct</span></h4>
        <h5 className={style.org_name}>🇺🇸 <a href='https://disasteraccountability.org/'>Disaster Accountability Project</a></h5>
        <h6 className={style.title_name}>Frontend Engineer (Volunteer)</h6>
      
        <h4 className={style.year_header}><span className={style.highlight}>2016 Jan - Dec</span></h4>
        <h5 className={style.org_name}>🇺🇸 <a href='https://www.usfca.edu/'>University of San Francisco</a></h5>
        <h6 className={style.title_name}>Software Developer (Volunteer)</h6>

        <h4 className={style.year_header}><span className={style.highlight}>2016 Jul - Dec</span></h4>
        <h5 className={style.org_name}>🇺🇸 <a href='https://www.zariyaindia.org/'>Zariya</a></h5>
        <h6 className={style.title_name}>Frontend Engineer (Volunteer)</h6>
      </div>
      <button className={style.toggle_button} 
        onClick={onClick} type='button'>{buttonText}</button>
    </ItemFrame>
  )
}

//Write skills and certifications here
const SkillCertItem = () => {
  const imgInfo: ImageInfo = {
    src: '/skill_and_cert.png',
    height: 80,
    width: 91,
    alt: 'Education and experience icon'
  }

  return (
    <ItemFrame
      header={'Skills & Certifications'}
      imgInfo={imgInfo}>
      <h4 className={style.skill_cert_header}>💻 Tech stack I use</h4>
      <p>Javascript, Typescript, HTML, CSS, C, Python, React, Webpack, Node.js, Mongoose (MongoDB)</p>
      <hr className={style.divider}/>
      <h4 className={style.skill_cert_header}>📚 Learning</h4>
      <p>Docker, Rust, Next.js</p>
      <hr className={style.divider}/>
      <h4 className={style.skill_cert_header}>📜 Certifications</h4>
      <h5 className={style.cert_name}>Legacy Full Stack</h5>
      <h6 className={style.cert_org_name}>freeCodeCamp</h6>
      <h5 className={style.cert_name}>React (Basic) Certificate</h5>
      <h6 className={style.cert_org_name}>HackerRank</h6>
      <h5 className={style.cert_name}>Problem Solving (Basic) Certificate</h5>
      <h6 className={style.cert_org_name}>HackerRank</h6>
    </ItemFrame>
  )
}

//Write hobbies and interests here
const HobbyInterestItem = () => {
  const imgInfo: ImageInfo = {
    src: '/hobby_and_interest.png',
    height: 80,
    width: 80,
    alt: 'Hobbies and interests icon'
  }

  return (
    <ItemFrame
      header={'Hobbies & Interests'}
      imgInfo={imgInfo}>
      <h4>My hobbies</h4>
      <p>I prefer</p>
      <h4></h4>
    </ItemFrame>
  )
}