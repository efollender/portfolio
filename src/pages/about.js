import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className='about--wrapper'>
      She was a <a href="https://variety.com/2017/gaming/features/neopets-internet-girl-culture-1202897761/">Neopets girl</a>. She <em>is</em> an experimental developer who knows her shit.
      It's been a wild ride.<br/><br/>
      After working as a self-taught in-house developer for three years, her insatiable curiosity led her away from New York and landed her at a coding bootcamp in Austin, Texas.
      <br/><br/>
      While she still taps into the backend skills acquired there, it made it clear that her passion lies in visual projects. Her favorite way to work is through heavy collaboration with designers.
      <br/><br/>
      She thrives on the pace of agencies and has worked at both <a href='https://brooklynfoundry.com/'>Brooklyn Digital Foundry</a> in New York and <a href="https://www.instrument.com">Instrument</a> in Portland, OR.
      <br/><br/>
      She is currently building  UI experiences as a Sr. Developer at Microsoft in Seattle.
      <br/><br/>
      When not writing code, she skis and bikes up mountains, and occassionally <a href="https://medium.com/@efollender">writes words</a>.
    </div>
  </Layout>
)

export default AboutPage
