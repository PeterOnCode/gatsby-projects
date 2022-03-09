import React from "react"
import { Link } from "gatsby"
import { Banner, TextWrapper } from "../styles/IndexStyles"

export default () => (
  <div style={{ position: "relative" }}>
    <Banner></Banner>
    <TextWrapper>
      <div>
        <h2>GeekyHacker</h2>
        <p>
          One stop for <br />
          All your development <br />
          And design needs
        </p>
        <Link to="/works">Our Works</Link>
      </div>
    </TextWrapper>
    {/*<MoreText>Learn More</MoreText>*/}
  </div>
)
