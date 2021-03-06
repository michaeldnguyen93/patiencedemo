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
    <Link to="/dashboard/">
      <button style={{
          marginRight:30, 
          background:"white",
          color:"black",
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
    <Link to="/dashboard" style={{fontSize:14}}>
      Forgot Password?
    </Link>
    {' | '}
    <Link to="/dashboard" style={{fontSize:14}}>
      Register Account
    </Link>
  </Layout>
)

export default IndexPage
