import React from "react"
import Dropzone from 'react-dropzone'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProgressBar from "../components/ProgressBar"

const SecondPage = () => (

  <Layout>

    <SEO title="User Dashboard" />
  
    
    <div style={{backgroundColor:"grey"}}>
      <h2>Upload Files</h2>
    </div>

    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
      {({getRootProps, getInputProps}) => (
        <section>
          <div {...getRootProps()}>
          <input {...getInputProps()} />
          <h5>Drag & drop some files here, or click to select files.</h5>
          </div>
        </section>
      )}
     </Dropzone>

    <div style={{backgroundColor:"grey"}}>
      <h2>Annotation Progress</h2>
    </div>
    <div>
      <ProgressBar/>
    </div>

    <p></p>

    <div style={{backgroundColor:"grey"}}>
      <h2>Download Annotations</h2>
    </div>
    <button type="submit"><h6>Download</h6></button>

    <p></p>

    <Link to="/">Log Out</Link>
  </Layout>
)

export default SecondPage