import React from 'react'
import { Link } from 'gatsby'
import styles from './_article.module.scss'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunction.js'

const Article = ({ slug, title, date, excerpt, fluid, tags }) => {
   return (
      <article className={styles.articleBox}>
         <div className={styles.left}>
            <Img fluid={fluid} alt={title} />
         </div>
         <div className={styles.right}>
            <h3>
               <Link to={slug}>{title}</Link>
            </h3>
            <div className={styles.date}>{date}
            </div>
            <div>
               {excerpt}
            </div>
            <div>
               <ul className={styles.tags}>
                  {tags.map(tag => (
                     <li key={tag}>
                        <Link to={`/tag/${slugify(tag)}`}>{tag}</Link>
                     </li>
                  ))}
               </ul>
            </div>
            <div className={styles.more}>
               <Link to={slug}>Read More</Link>
            </div>
         </div>
      </article>
   )
}

export default Article