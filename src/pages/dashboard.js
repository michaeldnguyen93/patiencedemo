import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProgressBar from "../components/ProgressBar"
import Uploader from "../components/Uploader"

const SecondPage = () => (

  <Layout>

    <SEO title="User Dashboard" />
  
    
    <div style={{backgroundColor:"white"}}>
      <h2>Upload Files</h2>
    </div>
    <div>
      <Uploader/>
    </div>

    <div style={{backgroundColor:"white"}}>
      <h2>Annotation Progress</h2>
    </div>
    <div>
      <ProgressBar/>
    </div>

    <p></p>

    <div style={{backgroundColor:"white"}}>
      <h2>Download Annotations</h2>
    </div>
    <button type="submit"><h6>Download</h6></button>

    <p></p>

    <Link to="/">Log Out</Link>
  </Layout>
)

export default SecondPage