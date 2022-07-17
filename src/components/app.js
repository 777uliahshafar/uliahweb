import React from 'react';
//import Navbar from './Nav/Navbar';
import styles from './_app.module.scss'
import Burger from './Nav/Burger';


function App() {
  return (
    <div className={styles.app}>
      <Burger />
      
    </div>
  );
}

export default App;