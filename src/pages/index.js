import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Nav from "../components/nav"
import Header from "../components/header"

const Contact = styled.div`
  p {
    text-align: center;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Eleanor Murguia" />
    <Header siteTitle="Eleanor Murguia" />
    <Nav />

    <div>
      <p>
        Eleanor is a Software Engineer currently working on loyalty and
        retention features on Grubhub.com and Seamless.com.{" "}
      </p>
      <p>
        She is excited by beautiful user interfaces and refactoring legacy code.{" "}
      </p>
      <p> She loves TypeScript and well documented processes. </p>
      <p>
        She graduated from Columbia University (Barnard College) in 2019 with a
        degree in Computer Science and spent several semesters as a TA.
      </p>
      <p>
        She is passionate about sharing the joys of coding and is dedicated to
        creating inclusive spaces.{" "}
      </p>
    </div>
    <Contact></Contact>
  </Layout>
)

export default IndexPage
