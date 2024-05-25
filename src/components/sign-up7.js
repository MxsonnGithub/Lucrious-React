import React from 'react'

import PropTypes from 'prop-types'

import './sign-up7.css'

const SignUp7 = (props) => {
  return (
    <div className="sign-up7-container">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="sign-up7-sign-up-image thq-img-ratio-16-9"
      />
      <div className="sign-up7-container1"></div>
      <div className="sign-up7-form-root">
        <div className="sign-up7-form thq-section-padding">
          <div className="sign-up7-title-root">
            <h2 className="sign-up7-text thq-heading-2">{props.heading1}</h2>
            <span className="thq-body-small">{props.content1}</span>
          </div>
          <div className="sign-up7-container2">
            <button className="sign-up7-button thq-button-filled">
              <span className="sign-up7-text2 thq-body-small">
                {props.action1}
              </span>
            </button>
            <button className="sign-up7-button1 thq-button-outline">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="sign-up7-icon"
              >
                <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
              </svg>
              <span className="sign-up7-text3 thq-body-small">
                {props.action2}
              </span>
            </button>
            <button className="sign-up7-button2 thq-button-outline">
              <svg
                viewBox="0 0 860.0137142857142 1024"
                className="sign-up7-icon2"
              >
                <path d="M438.857 449.143h414.286c4 22.286 6.857 44 6.857 73.143 0 250.286-168 428.571-421.143 428.571-242.857 0-438.857-196-438.857-438.857s196-438.857 438.857-438.857c118.286 0 217.714 43.429 294.286 114.857l-119.429 114.857c-32.571-31.429-89.714-68-174.857-68-149.714 0-272 124-272 277.143s122.286 277.143 272 277.143c173.714 0 238.857-124.571 249.143-189.143h-249.143v-150.857z"></path>
              </svg>
              <span className="sign-up7-text4 thq-body-small">
                {props.action3}
              </span>
            </button>
          </div>
          <p className="sign-up7-text5 thq-body-large">
            <span>
              By creating an account, you agree to the Terms of use and Privacy
              Policy.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </p>
          <span className="thq-body-small sign-up7-text8">
            Already have an account? Sign in
          </span>
        </div>
      </div>
    </div>
  )
}

SignUp7.defaultProps = {
  action2: 'Continue with Facebook',
  content1: 'Sign up to see details',
  image1Alt: 'SignUp Image',
  heading1: 'Create an account',
  image1Src:
    'https://images.unsplash.com/photo-1605089103010-bcba7ca9b10d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjY3MzA3NXw&ixlib=rb-4.0.3&q=80&w=1080',
  action3: 'Continue with Google',
  action1: 'Continue with email',
}

SignUp7.propTypes = {
  action2: PropTypes.string,
  content1: PropTypes.string,
  image1Alt: PropTypes.string,
  heading1: PropTypes.string,
  image1Src: PropTypes.string,
  action3: PropTypes.string,
  action1: PropTypes.string,
}

export default SignUp7
