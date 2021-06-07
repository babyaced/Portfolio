//Import CSS
import styles from './App.module.css';
import './globalStyles.css';

import Me from './components/Me.js'
import Zooble from './components/Zooble';
import YelpML from './components/YelpML';
import MusicPlayer from './components/MusicPlayer';
import FileSys from './components/FileSys';


function App() {
  return (
    <div className={styles.app}>
      <Me/>
      <div className={styles.projects}>
        <Zooble/>
        <MusicPlayer/>
        <FileSys/>
        <YelpML/>
        <Zooble/>
      </div>
    </div>
  );
}

export default App;
