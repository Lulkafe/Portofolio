import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import WelcomeSection from '../components/welcome'
import AboutSection from '../components/about'
import ProjectSection from '../components/project'
import Footer from '../components/footer'
import { useReducer } from 'react'
import { STATE_REDUCER, INIT_STATE, ACTION, AppContext } from '../components/reducer'

const Home: NextPage = () => {

  const [state, dispatch] = useReducer(STATE_REDUCER, INIT_STATE);
  const onClick = () => {
    dispatch({ type: ACTION.MENU.VISIBLE, value: true });
  }

  return (
    <div onClick={onClick}>
        <AppContext.Provider value={{state, dispatch}}>
            <Head>
              <meta name='viewport' content='width=device-width, initial-scale=1'></meta>
            </Head>
            <Header/>
            <WelcomeSection/>
            <AboutSection/>
            <ProjectSection/>
            <Footer/>
        </AppContext.Provider>
    </div>
  )
}

export default Home
