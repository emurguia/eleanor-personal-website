import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const StyledConstruction = styled.div`
h1 {
  text-align: center;
}
margin-top: 60px;
margin-bottom: 60px;

`;

const IndexPage = () => (
  <Layout>
    <SEO title="Eleanor Murguia" />
    <StyledConstruction>
    <h1>Under Construction</h1>
    </StyledConstruction>
  </Layout>
)

export default IndexPage
