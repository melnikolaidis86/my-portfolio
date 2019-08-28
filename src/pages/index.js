import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectList from "../components/projects-list"

export default ({ data }) => {
    return (
      <Layout>
          <SEO title="Home" />
          <div>
            <ProjectList data={data} />
          </div>
      </Layout>
    )
}

export const query = graphql` 
query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    edges {
      node {
        id
        frontmatter {
            title
            section
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
        }
        fields {
          slug
        }
      }
    }
  }
}`
