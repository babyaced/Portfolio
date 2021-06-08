//Import CSS
import styles from './App.module.css';
import './globalStyles.css';

import AboutMe from './components/AboutMe.js'
import ContactMe from './components/ContactMe.js'
import ProjectCard from './components/ProjectCard';


import FirebaseLogo from './assets/logos/Firebase.svg'
import SwiftLogo from './assets/logos/Swift_logo_color.svg'
import MusicPlayerProjectScreenshot from './assets/images/SwiftMusic1.PNG'

import ReactLogo from './assets/logos/reactLogo.svg'
import AWSLogo from './assets/logos/icons8-amazon-web-services.svg'
import GoogleMapsLogo from './assets/logos/icons8-google-maps.svg'
import NodeJSLogo from './assets/logos/icons8-node-js.svg'
import MySQLLogo from './assets/logos/icons8-mysql-logo.svg'
import ZoobleScreenshot from './assets/images/image26.png'

import CLogo from './assets/logos/C_Programming_Language.svg'
import LinuxLogo from './assets/logos/icons8-linux-96.png'
import FileSystemProjectScreenshot from './assets/images/FileSystem.png'

import PythonLogo from './assets/logos/icons8-python.svg'
import PandasLogo from './assets/logos/pandas_secondary.svg'
import ScikitLearnLogo from './assets/logos/scikit-learn-logo-notext.png'
import YelpProjectScreenshot from './assets/images/YelpProjectPic.png'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.me}>
        <AboutMe/>
        <ContactMe/>
      </div>
      <div className={styles.projects}>
          <ProjectCard 
              projectTitle={'iOS Music Streaming App'} 
              projectRepo={'https://github.com/babyaced/MyMusicOnline'} 
              projectTechStack={[SwiftLogo,FirebaseLogo]}
              style={{backgroundImage: `url(${MusicPlayerProjectScreenshot})`, backgroundPosition: '10% 0%'}}
          />
          <ProjectCard 
              projectTitle={'Zooble: Pet Owner Social Media'} 
              projectRepo={'https://github.com/babyaced/CSC648-Final-Project'} 
              projectTechStack={[ReactLogo, NodeJSLogo, MySQLLogo,AWSLogo,GoogleMapsLogo]}
              style={{backgroundImage: `url(${ZoobleScreenshot})`, backgroundPosition: '70% 0%'}}
            />
            <ProjectCard 
              projectTitle={'Yelp Rating Predictor'} 
              projectRepo={'https://github.com/babyaced/MyMusicOnline'} 
              projectTechStack={[PythonLogo, ScikitLearnLogo, PandasLogo]}
              style={{backgroundImage: `url(${YelpProjectScreenshot})`, backgroundPosition: '70% 0%'}}
            />
            <ProjectCard 
              projectTitle={'Linux Virtual File System'} 
              projectRepo={'https://github.com/CSC415-Fall2020/group-term-assignment-file-system-babyaced'} 
              projectTechStack={[CLogo, LinuxLogo]}
              style={{backgroundImage: `url(${FileSystemProjectScreenshot})`, backgroundPosition: '10% 0%'}}
            />
      </div>
    </div>
  );
}

export default App;
