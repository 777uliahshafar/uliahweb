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
          limit: 5
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
            <ListGroupItem>
              <CardLink href="https://uliahid.com/2022-12-27%20loi%20prompt/">
                YTB Prompt<Badge pill>1</Badge>
              </CardLink>
            </ListGroupItem>
            <ListGroupItem>
              <CardLink href="https://uliahid.com/ytbsch2022-12-29/">
                YTB Prerequisite<Badge pill>1</Badge>
              </CardLink>
            </ListGroupItem>
            <ListGroupItem>
              <CardLink href="https://uliahid.com/gkssch2023-01-23/">
                GKS Prerequisite<Badge pill>1</Badge>
              </CardLink>
            </ListGroupItem>
            <ListGroupItem>
              <CardLink href="https://uliahid.com/moesch2023-01-22/">
                MOE Prerequisite<Badge pill>1</Badge>
              </CardLink>
            </ListGroupItem>
            <ListGroupItem>
              <CardLink href="https://uliahid.com/aassch2023-01-23/">
                AAS Prerequisite<Badge pill>1</Badge>
              </CardLink>
            </ListGroupItem>
            <ListGroupItem>
              <CardLink href="https://uliahid.com/mextsch2023-01-23/">
                MEXT Prerequisite<Badge pill>1</Badge>
              </CardLink>
            </ListGroupItem>
            <ListGroupItem>
              <CardLink href="https://uliahid.com/lpdpnbpi/">
                LPDP BPI Prerequisite<Badge pill>1</Badge>
              </CardLink>
            </ListGroupItem>

            <ListGroupItem>
              <CardLink href="https://uliahid.com/Scholarship%20Info%20Des/">
                Timeline General Sch<Badge pill>0</Badge>
              </CardLink>
            </ListGroupItem>
            <ListGroupItem>
              <CardLink href="https://uliahid.com/certified2023-01-21/">
                Certified Sch <Badge pill>0</Badge>
              </CardLink>
            </ListGroupItem>
            <ListGroupItem>
              <CardLink href="https://uliahid.com/activesch2023-01-25/">
                Active Docs Sch <Badge pill>0</Badge>
              </CardLink>
            </ListGroupItem>
          </ListGroup>
        </Card>

        <Card className={styles.card}>
          <CardBody>
            <CardTitle>
              <h2>Instructions!</h2>
            </CardTitle>
            <ListGroup>
              <ListGroupItem className="text-dark" color="success">
                1. Do both of these writing and speaking tasks with the help of
                vocabulary review.
              </ListGroupItem>
              <ListGroupItem className="text-dark" color="light">
                2. Do extra practice of listening section or reading section at
                the same day first one.
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
