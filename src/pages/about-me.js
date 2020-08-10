import React from "react"

import Layout from "../components/layout"
import Button from "../components/atoms/button"
import StyledLink from "../components/atoms/link"
import SEO from "../components/seo"

const AboutMe = () => (
  <Layout>
    <SEO title="About Me" />
    <h1>Hi this is me!</h1>
    <p>I love unicorns <span>🦄</span></p>
    <Button href="#mops" text="moppel" />
    <StyledLink to="/">Go back to the homepage</StyledLink>
  </Layout>
)

export default AboutMe
