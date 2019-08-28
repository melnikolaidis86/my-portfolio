import React from "react"
import { Link } from "gatsby"

const ProjectCard = ({ imageSrc, slug, title, section }) => (
  <li className="project-unit fl w-100 w-50-ns pl1-ns pl2-l pb3 pb3-l">
    <Link to={slug} className="db absolute--fill" title={title} itemProp="url">
      <img src={imageSrc} alt={title}/>
      <figcaption>
        {title}
        <span>{section}</span>
      </figcaption>
    </Link>
  </li>
)

export default ProjectCard
