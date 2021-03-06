import style from '../styles/About.module.sass'
import Image from 'next/image'
import { ImageInfo } from './interface';
import { useState } from 'react';

export default function AboutMeSection () {

  return (
    <div className={style.section_background}>
      <div className={style.section_wrapper} id='about'>
        <div className={style.content_wrapper}>
            <h2 className={style.section_header}><span className={style.section_header_letters}>ABOUT ME</span></h2>
            <div className={style.items_wrapper}>
              <EduAndExpItem/>
              <SkillCertItem/>
              <HobbyInterestItem/>
            </div>
        </div>
      </div>
    </div>
  )
}

const ItemFrame = (props: any) => {
  
  const header: string = props.header || '';
  const img: ImageInfo = props.imgInfo;

  return (
    <div className={style.about_item} data-aos="fade-up" data-aos-duration="1000">
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
      <h5 className={style.org_name}>🎓 <a href='https://www.usfca.edu/'>University of San Francisco</a></h5>
      <h6 className={style.title_name}>MS in Computer Science</h6>
      <h4 className={style.year_header}>Jan 2013 - Dec 2015</h4>
      
      <h5 className={style.org_name}>🎓 <a href='https://www.umfk.edu/'>University of Maine at Fort Kent</a></h5>
      <h6 className={style.title_name}>BS in Computer Applications</h6>
      <h4 className={style.year_header}>Sep 2008 - May 2012</h4>

      <hr className={style.divider}/>

      {/* Work Experience */}
      <h5 className={style.org_name}>🇺🇸 <a href='https://www.tsg-globals.com/overview_tsgusa/index_e.html'>TSG USA</a></h5>
      <h6 className={style.title_name}>Software System Engineer</h6>
      <h4 className={style.year_header}>Dec 2016 - Present</h4>
      <p>Work for Nissan automotive embedded system SW (e.g. headunit, amplifiers)</p>

      <h5 className={style.org_name}>🇺🇸 <a href='https://www.opendns.com/'>OpenDNS</a></h5>
      <h6 className={style.title_name}>Data Visualization Engineer (intern)</h6>
      <h4 className={style.year_header}>Jun 2016 - Aug 2015</h4>

      <hr className={style.divider}/>

      {/* Volunteer Experience (Optional) */}
      <div className={`${style.volunteer_part} ${showVolExp? '' : style.hide}`}>
        <h5 className={style.org_name}>🇺🇸 <a href='https://www.usfca.edu/'>University of San Francisco</a></h5>
        <h6 className={style.title_name}>Software Developer (Volunteer)</h6>
        <h4 className={style.year_header}>Jan 2016 - Dec 2016</h4>
        <p>Ported an operating system (xv6) from one platform to another.</p>

        <h5 className={style.org_name}>🇺🇸 <a href='https://disasteraccountability.org/'>Disaster Accountability Project</a></h5>
        <h6 className={style.title_name}>Frontend Engineer (Volunteer)</h6>
        <h4 className={style.year_header}>Jul 2016 - Oct 2016</h4>
        <p>Participated in the landing page and a dashboard page development</p>
      
        <h5 className={style.org_name}>🇺🇸 <a href='https://www.zariyaindia.org/'>Zariya</a></h5>
        <h6 className={style.title_name}>Frontend Engineer (Volunteer)</h6>
        <h4 className={style.year_header}>Jul 2016 - Dec 2016</h4>
        <p>Implemented the landing page for both desktop and mobile devices</p>
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
      <ul className={style.cert_list}>
        <li><h5 className={style.cert_name}><a href='https://www.freecodecamp.org/certification/seimei/full-stack'>Legacy Full Stack</a></h5>
      <h6 className={style.cert_org_name}>freeCodeCamp</h6></li>
        <li><h5 className={style.cert_name}><a href='https://www.hackerrank.com/certificates/90c163c2eded'>React (Basic)</a></h5>
      <h6 className={style.cert_org_name}>HackerRank</h6></li>
        <li><h5 className={style.cert_name}><a href='https://www.hackerrank.com/certificates/1ac3d3d0e0aa'>Problem Solving (Basic)</a></h5>
      <h6 className={style.cert_org_name}>HackerRank</h6></li>
      </ul>
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
      <h4 className={style.hobby_item_header}>Hobbies</h4>
      <p>I prefer workout, drawing, and learning foreign languages.<br/>
        Currently, I study English, Spanish, Finnish and French.
      </p>
      <hr className={style.divider}/>
      <h4 className={style.interest_item_header}>Interests</h4>
      <p>I like music. Electronica, Ambient, Chillout, Drum & Bass, and Heavy Metal
         are favorite genres. <br/><br/>Favorite Musicians/groups are, for example, Moonsorrow, Lemon Jelly,
         Need a Name, and Devin Townsend. <br/>
         <br/>
         I also like to watch Youtube videos introducing culture of other countries.

      </p>
    </ItemFrame>
  )
}