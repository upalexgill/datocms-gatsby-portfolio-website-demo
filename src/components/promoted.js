import React from 'react'
import PropTypes from "prop-types"
import { StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import { Card, Grid } from "semantic-ui-react"

const Promoted = ({ data }) => (
  <StaticQuery
    query={graphql`
      {
        allDatoCmsPromoted {
          edges {
            node {
              id
              title
              text
              slug
              image {
                fluid(
                  maxWidth: 150
                  imgixParams: { fm: "jpg", auto: "compress" }
                ) {
                  ...GatsbyDatoCmsSizes
                }
              }
            }
          }
        }
      }
    `}
    render={data => /*<pre>{JSON.stringify(data, null, 4)}</pre> */ (
    <Grid>
      <Grid.Row>
        <Grid.Column width={16}>
          <Card.Group stackable itemsPerRow={3}>
            {data.allDatoCmsPromoted.edges.map(({ node }) => (
              <Card
                href={`/${node.slug}`}
                key={node.id}
                style={{ minHeight: 320 }}
              >
                {node.image && (
                  <Img
                    fluid={node.image.fluid}
                    style={{ maxHeight: 150 }}
                  />
                )}
                <Card.Content>
                  <Card.Header>{node.title}</Card.Header>
                </Card.Content>
                <Card.Content>
                  <Card.Description>{node.text}</Card.Description>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    )}
  ></StaticQuery>
)

Promoted.propTypes = {
  data: PropTypes.object
};

export default Promoted
