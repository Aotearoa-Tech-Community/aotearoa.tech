import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Beet from "../images/beet.svg"

const Header = ({ siteTitle }) => (
  <>
  <header
    style={{
      background: `#7a1f3d`,
      marginBottom: `1.45rem`,
    }}
  >

    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    ><nobr>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#EDEDEB`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <Beet id="logo" style={{ maxWidth: `2em`, maxHeight: `2em` }} />
      </h1>
      </nobr>
    </div>
  </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
