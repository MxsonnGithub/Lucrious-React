import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Lucrious</title>
        <meta
          name="description"
          content="Home page for the lucrious website."
        />
        <meta property="og:title" content="Lucrious" />
        <meta
          property="og:description"
          content="Home page for the lucrious website."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/46f00f36-26a5-4fb9-9573-1b391089a425/34a1dd8e-4c2e-4712-aa6d-7ab001f625fe?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="home-section-separator"></div>
      <div className="home-container1">
        <div className="home-hero">
          <img
            alt="image"
            src="/newpfplucrious-modified1-600h.png"
            className="home-image"
          />
          <a
            href="https://www.youtube.com/@RealLucrious"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link button"
          >
            My YouTube!
          </a>
          <a
            href="https://discord.gg/BJTFmgEf3v"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link1 button"
          >
            My Discord!
          </a>
          <div className="home-hero-text-container">
            <h1 className="home-heading">Gaming Content Creator</h1>
            <span className="home-text">
              Hi, I&apos;m Lucrious. I&apos;m a Gaming Content Creator who LOVES
              being a YouTuber. I enjoy creating content for YOU!  I hope you
              can enjoy the content I provide!
            </span>
            <div className="home-cta-btn-container">
              <div className="home-container2"></div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/subcount" className="home-navlink button">
        <img src="/utubelogo-200h.png" alt="image" className="home-image1" />
        <span className="home-text01">Lucrious&apos;s Live Subcount</span>
      </Link>
      <div className="home-features">
        <div className="home-heading-container">
          <h2 className="home-text02">Things I do!</h2>
        </div>
        <div className="home-cards-container">
          <div className="home-card">
            <div className="home-icon-container">
              <img src="/yoou-300h.png" alt="image" className="home-image2" />
            </div>
            <div className="home-content-container">
              <span className="home-text03">Making Content YOU Enjoy!</span>
            </div>
          </div>
          <div className="home-card1">
            <div className="home-icon-container1">
              <img
                src="/pastedimage-xul-600h.png"
                alt="image"
                className="home-image3"
              />
            </div>
            <div className="home-content-container1">
              <span className="home-text04">
                I Love Hanging Out With My Community, So I Have Created A
                Discord Server! Join My Discord Server At The Top Of The Page! I
                Am Active In There.
              </span>
            </div>
          </div>
          <div className="home-card2">
            <div className="home-icon-container2">
              <img
                src="/pastedimage-sbuj-200h.png"
                alt="image"
                className="home-image4"
              />
            </div>
            <div className="home-content-container2">
              <span className="home-text05">
                <span className="home-text06">
                  Developing Games In Roblox Studio For Anyone To Enjoy!
                </span>
                <br className="home-text07"></br>
                <span className="home-text08">
                  Psst....I May Make Videos About Them!
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-subscribe">
        <div className="home-container3">
          <img
            src="/get%20in%20touch1-1500w.png"
            alt="image"
            className="home-image5"
          />
        </div>
        <div className="home-container4">
          <div className="home-heading-container1">
            <h1 className="home-text10">Get in touch!</h1>
            <span className="home-text11">
              We will send you our monthly emails about new things coming!
            </span>
          </div>
          <a
            href="https://form.jotform.com/241456558035055"
            className="home-link2 Anchor button"
          >
            Sign up!
          </a>
        </div>
      </div>
      <span className="home-text12">
        Developed By RealLucrious &amp; MxsonnRBLX
      </span>
      <span>
        <span className="home-text13 Anchor">
          Copyright, 2024, All rights reserved to RealLucrious
        </span>
        <br></br>
      </span>
    </div>
  )
}

export default Home
