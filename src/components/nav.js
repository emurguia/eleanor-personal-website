import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"

const StyledNav = styled.nav`
  text-align: center;
  li {
    display: inline;
    list-style: none;
    margin-right: 20px;
    a {
      text-decoration: none;
      font-weight: 600;
    }
  }
  margin-bottom: 30px;
`

const Nav = () => (
  <StyledNav>
    <ul>
      <li>
        <Link to="/projects">Work and Projects</Link>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/eleanormurguia/">LinkedIn</a>
      </li>
      <li>
        {" "}
        <a href="/eleanor_resume.pdf">Resume</a>
      </li>
    </ul>
  </StyledNav>
)

export default Nav
