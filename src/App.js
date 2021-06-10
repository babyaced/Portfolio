//Import CSS
import styles from './App.module.css';
import './globalStyles.css';

import AboutMe from './components/AboutMe.js'
import ContactMe from './components/ContactMe.js'
import ProjectCard from './components/ProjectCard';


import FirebaseLogo from './assets/logos/Firebase.svg'
import SwiftLogo from './assets/logos/Swift_logo_color.svg'
import MusicPlayerProjectScreenshot from './assets/images/SwiftMusic1.PNG'
import MusicPlayerDemo from './assets/videos/MusicPlayerDemo.mp4'

import ReactLogo from './assets/logos/reactLogo.svg'
import AWSLogo from './assets/logos/icons8-amazon-web-services.svg'
import GoogleMapsLogo from './assets/logos/icons8-google-maps.svg'
import NodeJSLogo from './assets/logos/icons8-node-js.svg'
import MySQLLogo from './assets/logos/icons8-mysql-logo.svg'
import ZoobleScreenshot from './assets/images/image26.png'

import CLogo from './assets/logos/C_Programming_Language.svg'
import LinuxLogo from './assets/logos/icons8-linux-96.png'
import FileSystemProjectScreenshot from './assets/images/FileSystem.png'
import FileSystemDemo from './assets/videos/FileSystemDemo.mp4'

import PythonLogo from './assets/logos/icons8-python.svg'
import PandasLogo from './assets/logos/pandas_secondary.svg'
import ScikitLearnLogo from './assets/logos/scikit-learn-logo-notext.png'
import YelpProjectScreenshot from './assets/images/YelpProjectPic.png'

import ConditionalWrapper from './components/ConditionalWrapper';

import CSSLogo from './assets/logos/icons8-css3.svg'
import HTMLLogo from './assets/logos/icons8-html-5.svg'
import PortfolioScreenshot from './assets/images/PortfolioScreenshot.png'

import useWindowSize from './hooks/useWindowSize.js'

function App() {

  const windowSize = useWindowSize();
  return (
    <div className={styles.app}>
        <div className={styles.aboutMeWrapper}>
          <AboutMe/>
        </div>
        <div className={styles.contactMeWrapper}>
          <ContactMe/>
        </div>
        <div className={styles.projects}>
            <ProjectCard 
                projectTitle={'Zooble: Pet Owner Social Media'} 
                projectRepo={'https://github.com/babyaced/CSC648-Final-Project'} 
                projectTechStack={{'React':ReactLogo, 'Node.js':NodeJSLogo, 'MySQL': MySQLLogo,'Amazon Web Services': AWSLogo,'Google Maps API': GoogleMapsLogo}}
                style={{backgroundImage: `url(${ZoobleScreenshot})`, backgroundPosition: '70% 0%'}}
                projectLink={"https://zooble.link"}
              />
            <ProjectCard 
                projectTitle={'This Portfolio'} 
                projectRepo={'https://github.com/babyaced/Portfolio'} 
                projectTechStack={{'React':ReactLogo, 'CSS3':CSSLogo, 'HTML5': HTMLLogo}}
                style={{backgroundImage: `url(${PortfolioScreenshot})`, backgroundPosition: '70% 0%'}}
                projectLink={"https://danielsimpson.dev"}
              />
            <ProjectCard 
                projectTitle={'iOS Music Streaming App'} 
                projectRepo={'https://github.com/babyaced/MyMusicOnline'} 
                projectTechStack={{'Swift':SwiftLogo,'Firebase': FirebaseLogo}}
                style={{backgroundImage: `url(${MusicPlayerProjectScreenshot})`, backgroundPosition: '10% 0%'}}
                demoVideo={MusicPlayerDemo}
            />
              <ProjectCard 
                projectTitle={'Yelp Rating Predictor'} 
                projectRepo={'https://github.com/babyaced/MyMusicOnline'} 
                projectTechStack={{'Python': PythonLogo,'Scikit Learn': ScikitLearnLogo,'Pandas': PandasLogo}}
                style={{backgroundImage: `url(${YelpProjectScreenshot})`, backgroundPosition: '70% 0%'}}
                projectLink={'https://colab.research.google.com/drive/1emNLQCsPGKX0pdW_OKnPQqi_q3OWTMy2?usp=sharing'}
              />
              <ProjectCard 
                projectTitle={'Linux Virtual File System'} 
                projectRepo={'https://github.com/CSC415-Fall2020/group-term-assignment-file-system-babyaced'} 
                projectTechStack={{'C':CLogo, 'Linux':LinuxLogo}}
                style={{backgroundImage: `url(${FileSystemProjectScreenshot})`, backgroundPosition: '10% 0%'}}
                demoVideo={FileSystemDemo}
              />
        </div>
      </div>
  );
}

export default App;
