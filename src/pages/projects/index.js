import { graphql, Link } from "gatsby"
import React from "react"

import Layout from "../../components/Layout"

import { portfolio, projects } from "../../styles/projects.module.css"

function Projects({ data }) {
  const projectsData = data.allMarkdownRemark.nodes

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
      </div>
    </Layout>
  )
}

export default Projects
export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
        id
      }
    }
  }
`
