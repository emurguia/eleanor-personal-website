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

const Contact = styled.div`
  p { 
    text-align: center;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Eleanor Murguia" />
    <StyledConstruction>
    <h1>Eleanor Murguia</h1>
        </StyledConstruction>

    <div> 
      <p>Eleanor is a Software Engineer currently working on grubhub.com and seamless.com. </p>
       <p>She is excited by beautiful user interfaces and refactoring legacy code. </p>
       <p> She loves TypeScript and well documented processes. </p>
       <p>She graduated from Barnard College in 2019 with a degree in Computer Science and spent several semesters as a TA.</p>
       <p>She is passionate about sharing the joys of coding and is dedicated to creating inclusive spaces.  </p>
    </div>
    <Contact>
    <p>
        <a href="https://www.linkedin.com/in/eleanormurguia/"> Connect with her on LinkedIn </a>
    </p>
    <p>
      <a href="/EleanorResume.pdf">View her resume</a>
    </p>

    </Contact>
  </Layout>
)

export default IndexPage
