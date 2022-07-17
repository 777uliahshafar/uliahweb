import React from "react"
import styles from './_layout.module.scss'
import Header from './header.js'
import Footer from './footer.js'
import Sidebar from './sidebar'
import Nav from './nav'
import App from './app';


export default ({children}) => (
    <div className={styles.container}>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossOrigin="anonymous"
        />
        <App />
        <Header/>     
        <Nav />

            <div className={styles.content}>
                {children}
            </div>

        <Sidebar/>
        <Footer>
            All rigth Reserved - 2020
        </Footer>
    </div>
)
