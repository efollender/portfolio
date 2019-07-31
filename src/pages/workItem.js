import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const work = {
    title: 'Netflix Media Center',
    description: "The Netlifx Media Center is a press hub for details about Netflix's release calendar and library. Our team's challenge involved oranizing the available data into a searchable format, and building a media player to allow previews of downloadable assets"
}

const WorkPage = () => (
  <Layout hideHeader bgColor='yellow'>
    <SEO title="Work" />
    <div className='work-detail'>
        <div className='work-detail--header'>
            {work.title}
        </div>
        <div className='work-detail--description'>
            {work.description}
        </div>
    </div>
  </Layout>
)

export default WorkPage
