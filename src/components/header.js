import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const navMenu = [
  {
    label: 'Work',
    path: '/work'
  },
  {
    label: 'Who ~is~ she?',
    path: '/about'
  },
]

const Header = ({ siteTitle }) => (
  <header>
    <div className='content--wrapper'>
      <h1>
        Hi, I'm <Link to="/">
          {siteTitle}
        </Link>, a creative developer
        based in  <Link to='/'>
          {' Seattle'}
        </Link>.
      </h1>
      <div className="nav--wrapper">
        {navMenu.map(item =>
          <div className='nav--item'>
            <Link to={item.path} activeClassName='active'>
              {item.label}
            </Link>
          </div>  
        )}
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
