import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

class NowPage extends React.Component {
  render() {
    return (
      <StaticQuery
        query={nowQuery}
        render={data => {
          const siteTitle = data.site.siteMetadata.title
          const image = data.image.childImageSharp.fixed

          return (
            <React.Fragment>
              <Layout location={this.props.location} title={siteTitle}>
                <SEO title="Now" />
                <h1>Now</h1>
                <p
                  style={{
                    ...scale(-1 / 5),
                    display: 'block',
                    marginBottom: rhythm(1),
                    marginTop: rhythm(-0.5),
                  }}
                >
                  Last updated: December 15, 2018
                </p>
                <p>
                  I am currently traveling Souteast Asia 🌏 together with{' '}
                  <a href="https://www.hannasoderquist.se/">Hanna</a>. We are
                  spending our days working on our own product ideas and trying
                  to ship some funny products.
                </p>

                <p>Projects currently in the works:</p>

                <p>
                  ‍‍💁 ‍
                  <strong>
                    <a href="https://www.letsborrowit.com">Let's Borrowit</a>
                  </strong>{' '}
                  - app to make people consume less and borrow more
                </p>
                <p>
                  🤖
                  <strong>
                    <a href="https://www.chekr.app">Chekr</a>
                  </strong>{' '}
                  - bot that watch my stocks, so I can spend time on other stuff
                </p>
                <p>
                  🧙‍
                  <strong>
                    <a href="https://www.linewizard.club">Line Wizard</a>
                  </strong>{' '}
                  - app that makes clean line breaks on Instagram posts
                </p>
                <p>
                  🚀
                  <strong>
                    <a href="https://www.swedishtechmakers.com">
                      Swedish Tech Makers
                    </a>
                  </strong>{' '}
                  - community with people that want to ship
                </p>
                <p>
                  🌱
                  <strong>
                    <a href="https://www.thehappylist.io">The Happy List</a>
                  </strong>{' '}
                  - articles and talks that helps me grow
                </p>

                <div style={{ textAlign: 'center' }}>
                  <figure>
                    <Image
                      fixed={image}
                      alt="Nice working spot in Ho Chi Minh City, Vietnam"
                      style={{
                        marginRight: rhythm(1 / 2),
                        marginBottom: 0,
                        minWidth: '300',
                        borderRadius: '1%',
                      }}
                    />
                    <figcaption>
                      <small>
                        Nice working spot in Ho Chi Minh City, Vietnam 🇻🇳
                      </small>
                    </figcaption>
                  </figure>
                </div>
                <hr
                  style={{
                    marginBottom: rhythm(1),
                  }}
                />
                <Bio />
              </Layout>
            </React.Fragment>
          )
        }}
      />
    )
  }
}

const nowQuery = graphql`
  query NowQuery {
    site {
      siteMetadata {
        title
      }
    }
    image: file(absolutePath: { regex: "/working-in-hcmc.jpg/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default NowPage
