/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer
        style={{
          width: "100%",
          backgroundColor: '#2E8B57',
          marginTop: `var(--space-5)`,
          fontSize: `var(--font-sm)`,
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            height: "40px",
            margin: `0 auto`,
            color: '#E0FFFF',
            display: `flex`,
            alignItems: `center`,
            justifyContent: `space-between`
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <p style={{margin: 0}}>Alymbaeva Asel</p>
        </div>
      </footer>
    </>
  )
}

export default Layout
