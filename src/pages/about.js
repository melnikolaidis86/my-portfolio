import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import { graphql, useStaticQuery } from "gatsby"

const SecondPage = () => {

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "meletis-nikolaidis.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 960, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About me"/>
      <div className='profile-photo-container tc mb6'>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
      <article className='about center w-100 w-75-m w-50-l mb6'>
        <h1 className='mb5'>
          Hello, I'm Meletis Nikolaidis. <br/>
          A web developer, focused on React and PHP development, currently working at Elegento and
          previously at TGN Solutions in Greece.
        </h1>
        <p className='tj'>
          In 2012 I started working as freelancer constructing websites with WordPress and static websites with HTML and
          CSS. Later on I started reading PHP and MySQL and building more complex websites and applications.
        </p>
        <p className='tj'>
          In 2017 I started studying Web Design and Development at SAE institute and working as a PHP developer at TGN
          Solutions, focused mainly on backend and crawling services. Daily tasks included fetching fresh data,
          representing them using MySQL and providing clients with excel and csv feeds.
        </p>
        <p className='tg'>
          While in TGN a dashboard project required VueJs and HighCharts so I have started to study front end
          technology. After worked both with Vue and Angular, I have switched to React and didn't take long to realise
          tha is my favorite :P. Working exclusively with React since then combined with Redux, NodeJS, Firebase and
          GraphQL as backend technologies.
        </p>
        <p className='tcg'>
          Since 2018, I have been working at Elegento providing e-commerce solutions using the well-known platform of
          Magento. We develop custom modules the Magento framework with PHP, requireJS, KnockoutJS and JQuery. Moreover,
          Magento is using CSS compilers like Less and Sass.
        </p>
      </article>
      <section id='learn-about-meletis' className='cf'>
        <div id='contact' className='center tc w-100 w-75-m w-50-l'>
          <a href="mailto:melnikolaidis86@gmail.com" className="db" title="Send me an email"
             itemProp="url">melnikolaidis86@gmail.com</a>
          <a href="tel:306979554109" className="db mb5" title="Give me a call" itemProp="url">+30 697 9554109</a>

          <a href="/downloads/mycv.pdf" className="db" title="Download Mel's Nikolaidis CV" itemProp="url">Download
            CV</a>
          <a href="https://gr.linkedin.com/in/meletis-nikolaidis-24648a14b" className="db mb5"
             title="Visit Mel's Nikolaidis on LinkedIn" itemProp="url">LinkedIn</a>
          <a href="https://github.com/melnikolaidis86" className="db"
             title="Check Mel Nikolaidis Github account" itemProp="url">GitHub</a>
        </div>
      </section>
    </Layout>
  )
}

export default SecondPage
