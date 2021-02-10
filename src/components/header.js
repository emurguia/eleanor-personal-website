import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledTitle = styled.header`
  h1 {
    text-align: center;
  }
  a {
    color: white;
    text-decoration: none;
  }
  margin-top: 60px;
  margin-bottom: 20px;
`
const Header = ({ siteTitle }) => (
  <StyledTitle>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </StyledTitle>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
