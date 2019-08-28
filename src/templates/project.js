import React from 'react';
import { graphql }  from 'gatsby';
import Layout from '../components/layout';
import Img from "gatsby-image"

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <div className="project-unit border-box mb6">
          {
            post.frontmatter.featuredImage ?
              <Img fluid={ post.frontmatter.featuredImage.childImageSharp.fluid }/> : ''
          }
        </div>
        <div className="mb0">
          <h2 className="text-extra-large db tc mb2">{ post.frontmatter.title }</h2>
          <h3 className="text-normal tc db">{ post.frontmatter.section }</h3>
        </div>
        <div className="project-description center w-50-ns tc mb6" dangerouslySetInnerHTML={{ __html: post.html}}/>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark( fields: { slug: { eq: $slug} }) {
      html
      frontmatter {
        title
        section
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1312) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
