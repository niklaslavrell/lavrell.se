import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <a href={props.to} target="_blank" rel="noopener noreferrer">
      <strong>{props.children}</strong>
    </a>
  </li>
)

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const social = data.site.siteMetadata.social

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Niklas"
          keywords={['blog', 'maker', 'product', 'travel', 'developer']}
        />
        <Bio />

        <ul style={{ marginLeft: '0rem' }}>
          <ListLink to={`https://twitter.com/${social.twitter}`}>
            Twitter
          </ListLink>
          <ListLink to={`https://www.instagram.com/${social.instagram}`}>
            Instagram
          </ListLink>
          <ListLink to={`https://www.linkedin.com/in/${social.linkedin}`}>
            LinkedIn
          </ListLink>
          <ListLink to={`https://www.nomadlist.com/@${social.nomadlist}`}>
            NomadList
          </ListLink>
          <ListLink to={`mailto:${social.email}`}>Mail</ListLink>
        </ul>

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          twitter
          instagram
          linkedin
          email
          nomadlist
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 165)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
