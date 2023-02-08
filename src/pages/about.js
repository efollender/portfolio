import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Twitter from '../images/icons/twitter-brands.inline.svg'
import Github from '../images/icons/github-brands.inline.svg'
import Linkedin from '../images/icons/linkedin-brands.inline.svg'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className='about--wrapper'>
      She was a <a href="https://variety.com/2017/gaming/features/neopets-internet-girl-culture-1202897761/">Neopets girl</a>. She <em>is</em> an experimental developer who loves a challenge.<br/><br/>
      After working for three years as a self-taught developer, her insatiable curiosity led her away from New York and landed her at a coding bootcamp in Austin, Texas.
      <br/><br/>
      There she built a full-stack foundation, but found that her passion lied solidly in building engaging UX. She is happiest when working closely with designers to create the unexpected.
      <br/><br/>
      She thrives on the pace and creativity of agencies and has worked at both <a href='https://brooklynfoundry.com/'>Brooklyn Digital Foundry</a> in New York and <a href="https://www.instrument.com">Instrument</a> in Portland, OR.
      <br/><br/>
      She dipped her toes into product development, building UI experiences at <a href="https://www.microsoft.com/en-us/msrc">Microsoft</a> and <a href="https://frame.io/">Frame.io</a> (@ Adobe).
      <br/><br/>
      When not writing code, she skis and bikes up mountains, and occassionally <a href="https://medium.com/@efollender">writes words</a>.<br/><br/>
      Get in touch | 
      <a href="https://twitter.com/efollender" className='social-icon twitter'>
        <Twitter/>
      </a>
      <a href="https://github.com/efollender" className='social-icon github'>
        <Github/>
      </a>
      <a href="https://www.linkedin.com/in/emma-follender-158ab855/" className='social-icon linkedin'>
        <Linkedin/>
      </a><br/><br/>
      <sub>* As most recent work is under NDA, it is not available on Github.</sub>
    </div>
  </Layout>
)

export default AboutPage
