import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {Component} from "react"

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

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      raining: false
    }
  }
  rain = () => {
    this.setState({
      raining: true
    })
  }
  stopRain = () => {
    this.setState({
      raining: false
    })
  }
  render() {
    const { siteTitle } = this.props;
    return (
      <header>
        <div className='content--wrapper'>
          <div className={`rain ${this.state.raining ? 'stormin' : 'nope'}`}>
            {Array.from(new Array(10)).map(item => 
              <div className="stem--wrapper">
                <div className="stem"/>
              </div>
            )}
          </div>
          <h1>
            Hi, I'm <Link to="/">
              {siteTitle}
            </Link>, a creative developer
            based in  <a href='#' onMouseOver={this.rain} onMouseLeave={this.stopRain}>
              {' Seattle'}
            </a>.
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
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
