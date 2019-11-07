import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="User Dashboard" />
    <div style={{backgroundColor:"grey"}}>
      <h2>Upload Files!</h2>
    </div>
    <p>Select files to upload here.</p>
    <div style={{backgroundColor:"grey"}}>
      <h2>Annotation Progress</h2>
    </div>
    <div style={{backgroundColor:"grey"}}>
      <h2>Download Annotations</h2>
    </div>

    <Link to="/">Log Out</Link>
  </Layout>
)

export default SecondPage
