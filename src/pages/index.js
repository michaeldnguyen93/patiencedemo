import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Login" />
    <h2>Meditate AI Login</h2>
    <form>
      <label style={{fontSize:14}}>
        Username or Email {"\n"}
        <br />
        <input type="text" name="username"></input>
      </label>
      <br />
      <br />
      <label style={{fontSize:14}}>
        Password
        <br />
        <input type="password" name="password"></input>
      </label>
    </form>
    <Link to="/page-2/">
      <button style={{
          marginRight:30, 
          background:"#415370",
          color:"white",
          width:"80px"
        }}>
        Log On
      </button>
    </Link>
    <label style={{fontSize:14}}>
      <input type="checkbox" name="keepLoggedIn" style={{marginRight:10}}>
      </input>
      Keep me logged in
    </label>
    <br />
    <br />
    <br />
    <br />
    <Link to="/page-2" style={{fontSize:14}}>
      Forgot Password?
    </Link>
    {' | '}
    <Link to="/page-2" style={{fontSize:14}}>
      Register Account
    </Link>
    {/*<Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage
