import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import pathLogo from '../images/work-logos/path.svg'
import netflixLogo from '../images/work-logos/netflix.svg'
import theMothLogo from '../images/work-logos/the-moth.png'
import pickathonLogo from '../images/work-logos/pickathon.png'
import spectaclesLogo from '../images/work-logos/spectacles.svg'
import alloyLogo from '../images/work-logos/alloy-llc.png'
import columbiaLogo from '../images/work-logos/columbia-manhattanville.png'

const works = [
  {
    title: 'PATH',
    path: 'https://path.org',
    logo: pathLogo
  },
  {
    title: 'Netflix Media Center',
    path: 'https://media.netflix.com',
    logo: netflixLogo
  },
  {
    title: 'The Moth',
    path: 'https://themoth.org',
    logo: theMothLogo
  },
  {
    title: 'Aural Borealis - Installation for Pickathon Music Festival',
    path: 'https://www.youtube.com/watch?v=fKGtF8Q5kHQ',
    logo: pickathonLogo
  },
  {
    title: 'Snapchat Spectacles',
    path: 'https://www.spectacles.com/',
    logo: spectaclesLogo
  },
  {
    title: 'Alloy LLC',
    path: 'http://www.alloyllc.com',
    logo: alloyLogo
  },
  {
    title: 'Columbia University',
    path: 'https://manhattanville.columbia.edu',
    logo: columbiaLogo
  },
]

const WorkPage = () => (
  <Layout>
    <SEO title="Work" />
    <div className='works'>
      {works.map(work => 
        <a without rel="noopener noreferrer" target="_blank" href={work.path} alt={work.title}>
          <div className='works--item' style={{backgroundImage: `url(${work.logo})`}}/>
         </a>
      )}
    </div>
  </Layout>
)

export default WorkPage
