import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
import Header from "../components/header"
import styled from "styled-components"

const StyledImage = styled.div`
  img {
    margin-bottom: 0;
  }
  caption {
    margin-top: 0px;
    margin-bottom: 20px;
    font-size: 14px;
    display: block;
  }
`
const GithubLink = styled.a`
  color: white;
  text-decoration: none;
`
const Projects = () => (
  <Layout>
    <SEO title="Eleanor Murguia Engineering Projects" />
    <Header siteTitle="Eleanor Murguia" />
    <Nav />
    <section>
      <h2>Grubhub</h2>
      <h4> July 2019 - Present</h4>
      <p>
        She is currently on the loyalty team, building features to help save
        diners money. She led work on building the offers carousel, which
        enables diners to pick the offer of their choice to apply to their cart.
      </p>
      <StyledImage>
        <img src="/offers_carousel.png" />
        <caption>The offers carousel on grubhub.com</caption>
      </StyledImage>

      <p>
        She also led efforts to re-architect loyalty display and application
        logic in order to integrate with a new API endpoint. Besides using the
        new API, this work included updating data models, converting components
        to React, and lots and lots of testing.
      </p>
      <p>
        <h4>Stack:</h4> TypeScript, React, Preact, Sass, TestCafe, Jest + some
        GatsbyJS and NextJS.
      </p>
    </section>
    <section>
      <h2>BwayBestie</h2>
      <h4> July - August 2017</h4>

      <p>
        BwayBestie is an iOS app that makes it easier to enter online lotteries
        for Broadway tickets.
      </p>
      <StyledImage>
        <img src="/bwaybestie.png" />
        <caption>Promotional images for BwayBestie</caption>
      </StyledImage>

      <p>
        BwayBestie enables Broadway fans to enter every online lottery for
        Broadway tickets in one place. BwayBestie supports autofilling user's
        information and allows users to enable notification for lottery openings
        and closing.
      </p>
      <p>
        BwayBestie is built entirely in Swift and made use of several of APIs,
        including SwiftWebVC to display the lottery websites and
        SideMenuController to for the navigation. To achieve the autofill of
        entry forms, BwayBestie injects JavaScript into the SwiftWebVC browser.
      </p>
      <p>
        <h4>
          <GithubLink href="https://github.com/emurguia/BwayBestie">
            Github
          </GithubLink>
        </h4>
        <h4>Stack:</h4> Swift, JavaScript
      </p>
    </section>
    <section>
      <h2>Gender Ender</h2>
      <h4> November 2018</h4>
      <p>
        Eleanor worked with a classmate to create a chrome extension that
        converts gendered language to gender neutral language for a Gender and
        Sexuality Studies course. The extension is{" "}
        <a href="https://chrome.google.com/webstore/detail/gender-ender-20/jmhngopgdkciacoffpdbmecoihaacace?hl=en">
          available to download
        </a>{" "}
        for chrome browsers.
      </p>

      <p>
        <h4>Stack:</h4> JavaScript, CSS, HTML
      </p>
    </section>
  </Layout>
)

export default Projects
