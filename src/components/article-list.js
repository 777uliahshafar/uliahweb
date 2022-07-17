import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Article from '../components/article'
import PaginationLinks from '../components/pagination-links.js'

const IndexPage = () => {
  const articlesPerPage = 4;
  let numberOfPages
  return (
    <StaticQuery query={indexQuery} render={data => {
      numberOfPages = Math.ceil(data.allMarkdownRemark.totalCount / articlesPerPage)
      return (
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Article key={node.id}
              slug={node.fields.slug}
              keyword={node.frontmatter.keyword}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
              fluid={node.frontmatter.image.childImageSharp.fluid}
              tags={node.frontmatter.tags} />
          ))}
          <PaginationLinks currentPage={1} numberOfPages={numberOfPages} />
        </div>
      )
    }} />
  )
}

const indexQuery = graphql`
  query {
    site{
      siteMetadata{
        title
      }
    }

    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}
      limit: 4
      ) {
      totalCount
      edges {
        node {
          fields{
            slug
          }
          id 
          frontmatter {
            title
            tags
            image{
              childImageSharp{
                fluid(maxWidth:750, maxHeight: 150){
                  ...GatsbyImageSharpFluid
                }
              }
            }
            date(formatString: "MMMM YYYY")
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage