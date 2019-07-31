/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import BgShapes from '../images/bg-shapes.svg';
import Helmet from 'react-helmet';

const Layout = ({ children, bgColor, hideHeader }) => {
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
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet"/>
        <link href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'/>
      </Helmet>
      <div className='main--wrapper'>
        <div className='bg-shapes--wrapper'>
          <div className={`bg-shapes ${bgColor}`}>
            <BgShapes/>
          </div>
          <div className='bg-shapes'>
            <BgShapes/>
          </div>
        </div>
        {!hideHeader &&
          <Header siteTitle={data.site.siteMetadata.title} />
        }
        <main>{children}</main>
        <footer>
         
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
