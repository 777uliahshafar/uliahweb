import React from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'
import { StaticQuery, graphql } from 'gatsby'

import styles from './_sidebar.module.scss'

export default () => (
    <StaticQuery
        query={graphql`query {
            allMarkdownRemark(
                filter: { frontmatter: {featured:{eq: true }}}
                sort: {fields: [frontmatter___date], order: DESC}
                ) {
              totalCount
              edges{
                node{
                    fields{
                      slug
                    }
                    id
                  frontmatter{
                    title
                    date(formatString: "MMMM YYYY")
                  }
                  excerpt
                  }
                }
              }
          
          }`
        }

        render={data => (

            <div className={styles.container}>
                <Card className={styles.card}>
                    <CardBody>
                        <CardTitle className="text-center">Featured Post</CardTitle>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <a key={node.id} href={node.fields.slug}>{node.frontmatter.title}</a>

                ))}
                </CardBody>
                </Card>
                
                <Card className={styles.card}>
                    <CardBody >
                        <CardTitle >
                            <h2>iklan</h2>
                        </CardTitle>
                        <img src="https://via.placeholder.com/320x200" alt="Iklan" style={{ width: "80%" }} />
                    </CardBody>
                </Card>


            </div>//end of div container
        )}
    />
)
