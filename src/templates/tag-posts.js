import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Title from '../components/title'
import Article from '../components/article'


const tagPosts = ({ data, pageContext }) => {
    const { tag } = pageContext
    const { totalCount } = data.allMarkdownRemark
    const tagTitle = `${totalCount} post${
        totalCount === 1 ? '' : 's'
    } tagged with "${tag}"`

    return (
        <Layout>
            <Title text={tagTitle}></Title>
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

        </Layout>
    )


}

export const tagQuery = graphql`
    query($tag: String!) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC}
            filter: { frontmatter: { tags: { in: [$tag]}}}
            ){
        totalCount
        edges {
            node 
            {
                id
                frontmatter{
                    title
                    date(formatString: "MMMM YYYY")
                    keywords
                    tags
                    image{
                    childImageSharp{
                        fluid(maxWidth:400, maxHeight: 200){
                        ...GatsbyImageSharpFluid
                        }
                    }
                    }
                    
                }
                fields{
                    slug
                }
                excerpt

            }
            
        }
        }
    }
`

export default tagPosts