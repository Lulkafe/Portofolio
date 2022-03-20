import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../component/header'
import WelcomeSection from '../component/welcome'
import AboutSection from '../component/about'
import ProjectSection from '../component/project'
import Footer from '../component/footer'

const Home: NextPage = () => {
  return (
    <>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1'></meta>
        </Head>
        <Header/>
        <WelcomeSection/>
        <AboutSection/>
        <ProjectSection/>
        <Footer/>
    </>
  )
}

export default Home
