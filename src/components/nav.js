import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styles from './_nav.module.scss'


//NavLink component

const NavLink = props => (
    <Link className={styles.link} to={props.to}>{props.text}</Link>
)



export default () => (

    <StaticQuery
        query={graphql`
      query {
        site {
          siteMetadata{
            title
          }
        }
      }
    `}

        render={data => (
            <nav className={styles.navContainer}>
                <div className={styles.row}>
                    <NavLink to='/' text='Articles' />
                    <NavLink to='/about' text='About' />
                    <NavLink to='/tags' text='Tags' />
                </div>
            </nav>

        )}
    />



)