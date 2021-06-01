import { graphql, Link } from "gatsby"
import React from "react"

import Layout from "../../components/Layout"

import { portfolio, projects } from "../../styles/projects.module.css"

function Projects({ data }) {
  const projectsData = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={projects}>
          {projectsData.map(project => {
            return (
              <Link
                to={`/projects/${project.frontmatter.slug}`}
                key={project.id}
              >
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </Link>
            )
          })}
        </div>
        <p>Like what you see? Contact me at {contact} for a quote!</p>
      </div>
    </Layout>
  )
}

export default Projects
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
