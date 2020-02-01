import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: 'white',
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0rem 0rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <div style={{maxWidth:'300px'}}>
          <a href="https://www.meditateai.com">
            <Image />
          </a>
        </div>
      </h1>
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
