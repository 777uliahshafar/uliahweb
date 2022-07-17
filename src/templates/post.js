import React from 'react'
import { graphql , Link } from 'gatsby'
import Layout from '../components/layout'
import Title from '../components/title'
import SocialShare from '../components/social-share'
import Comments from '../components/comment.js'
import styles from './_post.module.scss'
import { slugify } from '../util/utilityFunction.js'


const SinglePost = ({ data , pageContext }) => {
  const post = data.markdownRemark
  const comments = data.allCommentsYaml
  const baseUrl = 'http://determined-shirley-3a40e7.netlify.app'
  return (
    <Layout>
       <div className={styles.container}>
          <Title text={post.frontmatter.title}></Title>
          <div className={styles.topContent}>
            <div>{post.frontmatter.date}</div>

            <div>
              <ul>
                {post.frontmatter.tags.map(tag => (
                  <li key={tag}> 
                    <Link to={`/tag/${slugify(tag)}`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
          <div style={{ width: '100%', height: '200px', backgroundColor: '#fafafa', backgroundImage: 'Url(https://source.unsplash.com/960x200/?' + post.frontmatter.keywords + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', marginBottom: '.5rem' }}></div>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.html }} />
          
          <SocialShare baseUrl={baseUrl} pageContext={pageContext.slug} postTitle={post.frontmatter.title}/>

          <Comments slug={post.fields.slug} comments={comments.edges} />

          
       </div>
    </Layout>
  )
}


export const query = graphql`
  query(
      $slug: String!
    ) {
    markdownRemark(
    fields: { slug: { eq: $slug } }
    ) {
      html
      frontmatter {
        title
        keywords
        tags
        image{
          childImageSharp{
            fluid(maxWidth:400, maxHeight: 200){
              ...GatsbyImageSharpFluid
            }
          }
        }
        date(formatString: "MMMM YYYY")
      }
      fields {
        slug
      }
    }
    allCommentsYaml (
      filter: { slug: { eq: $slug } }
    ) {
      edges{
        node{
          _id
          name
          email
          message
          date
        }
      }
    }
  }
`

export default SinglePost