import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import WelcomeSection from '../components/welcome'
import AboutSection from '../components/about'
import ProjectSection from '../components/project'
import Footer from '../components/footer'

const Home: NextPage = () => {
  return (
    <>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1'></meta>
          <link href="https://fonts.googleapis.com/css2?family=Caveat&display=optional" rel="stylesheet"/>
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
