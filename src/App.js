import styles from './App.module.css'
import * as THREE from 'three';

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 
                                          75, 
                                          window.innerWidth / window.innerHeight, 
                                          0.1, 
                                         1000
                                          )

function App() {
  return (
    <div className={styles.container}>
      test
    </div>
  );
}

export default App;
