import React from 'react'
import Layout from '../components/layout'
import Title from '../components/title'
import Article from '../components/article'
import PaginationLinks from '../components/pagination-links.js'
import { graphql } from 'gatsby'

const articlesList = props => {
    const articles = props.data.allMarkdownRemark.edges
    const { currentPage , numberOfPages } = props.pageContext

    return(
        <Layout>
            <Title text={`Page: ${currentPage}`}></Title>
            {articles.map(({node}) => (
            <Article key={node.id}
                slug={node.fields.slug}
                keyword={node.frontmatter.keyword}
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                excerpt={node.excerpt}
                fluid={node.frontmatter.image.childImageSharp.fluid}
                tags={node.frontmatter.tags} />
            ))}
            <PaginationLinks currentPage={currentPage} numberOfPages={numberOfPages}/>
        </Layout>
    )
}

export const articlesListQuery = graphql`
    query articlesListQuery($skip: Int!, $limit:Int!){
        allMarkdownRemark(
            sort: {fields: [frontmatter___date], order: DESC}
            limit: $limit
            skip: $skip
            ) {
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

export default articlesList