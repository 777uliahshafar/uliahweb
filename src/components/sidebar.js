import React from 'react'
import { Card, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap'
import { StaticQuery, graphql } from 'gatsby'

import styles from './_sidebar.module.scss'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { featured: { eq: true } } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          totalCount
          edges {
            node {
              fields {
                slug
              }
              id
              frontmatter {
                title
                date(formatString: "MMMM YYYY")
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => (
      <div className={styles.container}>
        <Card className={styles.card}>
          <CardBody>
            <CardTitle className="text-center">Featured Post</CardTitle>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <a key={node.id} href={node.fields.slug}>
                {node.frontmatter.title}
              </a>
            ))}
          </CardBody>
        </Card>

        <Card className={styles.card}>
          <CardBody>
            <CardTitle>
              <h2>Instructions!</h2>
            </CardTitle>
            <ListGroup>
              <ListGroupItem className="text-dark" color="success">
                1. Do both of these writing tasks with vocabulary review.
              </ListGroupItem>
              <ListGroupItem className="text-dark" color="light">
                2. Do both listening and speaking section or reading section
                alone the same day as writing.
              </ListGroupItem>
              <ListGroupItem className="text-dark" color="success">
                3. Surf grammar, language, britishluke, ielts materials.
              </ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>

        <Card className={styles.card}>
          <CardBody>
            <CardTitle>
              <h2>Iklan</h2>
            </CardTitle>
            <img
              src="https://via.placeholder.com/320x200"
              alt="Iklan"
              style={{ width: '80%' }}
            />
          </CardBody>
        </Card>
      </div> //end of div container
    )}
  />
)
