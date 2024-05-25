import React from 'react'

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
      <div className="home-section-separator1"></div>
      <div className="home-container1">
        <div className="home-hero">
          <div className="home-hero-text-container">
            <h1 className="home-heading Section-Heading">
              Gaming Content Creator
            </h1>
            <span className="home-text">
              Hi, I&apos;m Lucrious. I&apos;m a Gaming Content Creator who LOVES
              being a YouTuber. I enjoy creating content for YOU!  I hope you
              can enjoy the content I provide!
            </span>
            <div className="home-cta-btn-container">
              <a
                href="https://www.youtube.com/@RealLucrious"
                target="_blank"
                rel="noreferrer noopener"
                className="home-cta-btn Anchor button"
              >
                <span className="home-text01">MY YOUTUBE</span>
              </a>
              <a
                href="https://discord.gg/qYpMAk7GEs"
                target="_blank"
                rel="noreferrer noopener"
                className="home-cta-btn1 Anchor button"
              >
                MY DISCORD
              </a>
            </div>
          </div>
          <div className="home-container2">
            <img
              alt="image"
              src="/newpfplucrious-1500w.jpg"
              className="home-image"
            />
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="home-heading-container">
          <h2 className="home-text02 Section-Heading">Things I do!</h2>
        </div>
        <div className="home-cards-container">
          <div className="home-card">
            <div className="home-icon-container">
              <img alt="image" src="/you-200h.jpg" className="home-image1" />
            </div>
            <div className="home-content-container">
              <span className="home-text03">Making Content YOU Enjoy!</span>
            </div>
          </div>
          <div className="home-card1">
            <div className="home-icon-container1">
              <img
                alt="pastedImage"
                src="/pastedimage-gfs-200h.png"
                className="home-pasted-image"
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
                alt="pastedImage"
                src="/pastedimage-gc5-200h.png"
                className="home-pasted-image1"
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
      <div className="home-section-separator2"></div>
      <div className="home-section-separator3"></div>
      <div className="home-section-separator4"></div>
      <div className="home-section-separator5"></div>
      <div className="home-subscribe">
        <div className="home-container3">
          <img
            alt="image"
            src="/newpfplucrious-1500w.jpg"
            className="home-image2"
          />
        </div>
        <div className="home-container4">
          <div className="home-heading-container1">
            <h1 className="home-text10 Section-Heading">Get in touch!</h1>
            <span className="Section-Text home-text11">
              We will send you our monthly emails about new things coming!
            </span>
          </div>
          <input
            type="text"
            required="true"
            placeholder="E-mail"
            className="home-textinput Section-Text input"
          />
          <button className="home-button Anchor button">SEND</button>
        </div>
      </div>
      <div className="home-section-separator6"></div>
      <span className="home-text12">
        Developed By RealLucrious &amp; MxsonnRBLX
      </span>
      <span>
        <span className="Anchor">
          Copyright, 2024, All rights reserved to RealLucrious
        </span>
        <br></br>
      </span>
    </div>
  )
}

export default Home
