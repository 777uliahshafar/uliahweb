import React from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
  Badge,
  CardLink
} from 'reactstrap'
import { StaticQuery, graphql } from 'gatsby'

import styles from './_sidebar.module.scss'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 10
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
            <CardTitle className="text-center">Recent Post</CardTitle>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <a key={node.id} href={node.fields.slug}>
                {node.frontmatter.title}
              </a>
            ))}
          </CardBody>
        </Card>

        <Card className={styles.card}>
          <CardTitle color="success" className="text-center">
            Link
          </CardTitle>
          <ListGroup variant="flush">
            <ListGroupItem>
              <CardLink href="https://drive.google.com/file/d/1A5dqboPlHNA1aoSqyeqbKfQAhq20t5hi/view?usp=sharing">
                Flashcard
              </CardLink>
            </ListGroupItem>
            <ListGroupItem>
              <CardLink href="https://drive.google.com/file/d/1DyXGVudGg6lSCakBAhGI9FBSy7GY5TLs/view?usp=sharing">
                Topic ideas
              </CardLink>
            </ListGroupItem>
          </ListGroup>
        </Card>

        <Card className={styles.card}>
          <CardBody>
            <CardTitle>
              <h2>English List</h2>
            </CardTitle>
            <ListGroup>
              <ListGroupItem className="text-dark" color="success">
                <CardLink href="https://uliahid.com/tag/speaking">
                  Speaking<Badge pill>2</Badge>
                </CardLink>
              </ListGroupItem>
              <ListGroupItem className="text-dark" color="success">
                <CardLink href="https://uliahid.com/tag/writing">
                  Writing<Badge pill>2</Badge>
                </CardLink>
              </ListGroupItem>

              <ListGroupItem className="text-dark" color="success">
                <CardLink href="https://uliahid.com/tag/reading">
                  Reading<Badge pill>2</Badge>
                </CardLink>
              </ListGroupItem>
              <ListGroupItem className="text-dark" color="success">
                <CardLink href="https://uliahid.com/tag/listening">
                  Listening<Badge pill>2</Badge>
                </CardLink>
              </ListGroupItem>

              <ListGroupItem className="text-dark" color="success">
                <CardLink href="https://uliahid.com/2023-04-05:09">
                  Spekaing Format<Badge pill>2</Badge>
                </CardLink>
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
