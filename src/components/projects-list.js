import React from "react"

import ProjectCard from "./project-card"

const ProjectList = ({ data }) => (
  <ul className="projects list cf">
    {
      data.allMarkdownRemark.edges.map(({ node }) => {
        const {id, frontmatter, fields} = node;
        return frontmatter.featuredImage ?
          (
              <ProjectCard
                key={id}
                imageSrc={frontmatter.featuredImage.childImageSharp.fluid }
                slug={fields.slug}
                title={frontmatter.title}
                section={frontmatter.section ? frontmatter.section : 'projects'}
              />
            )
          : ''
      })
    }
  </ul>
);

export default ProjectList;
