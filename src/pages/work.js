import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const works = [
  {
    title: 'PATH',
    path: 'https://path.org'
  },
  {
    title: 'Netflix Media Center',
    path: 'https://media.netflix.com'
  },
  {
    title: 'The Moth',
    path: 'https://themoth.org'
  },
  {
    title: 'Snapchat Spectacles',
    path: 'https://www.spectacles.com/'
  },
  {
    title: 'Alloy LLC',
    path: 'https://www.alloyllc.com'
  },
  {
    title: 'Columbia University',
    path: 'https://manhattanville.columbia.edu'
  },
]

const WorkPage = () => (
  <Layout>
    <SEO title="Work" />
    <div className='works'>
      {works.map(work => 
        <div className='works--item'>
          <span><a without rel="noopener noreferrer" target="_blank" href={work.path}>{work.title}</a></span>
        </div>
      )}
    </div>
  </Layout>
)

export default WorkPage
