import React from 'react'

export const SocialMedia = () => {
  return (
   
      <div className="home-hero__socials">
        <div className="home-hero__social">
          <a href="https://www.linkedin.com/in/jafv2022/" className="home-hero__social-icon-link" target="_blank">
            <img
              src="/png/linkedin-ico.png"
              alt="icon"
              className="home-hero__social-icon"
              rel="noreferrer"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="https://github.com/juanfonseca09" className="home-hero__social-icon-link" target="_blank">
            <img
              src="/png/github-ico.png"
              alt="icon"
              className="home-hero__social-icon"
              rel="noreferrer"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a
            href="https://instagram.com/juan_fonseca0709?igshid=NzAzN2Q1NTE="
            className="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
            target="_blank"
          >
            <img
              src="/png/insta-ico.png"
              alt="icon"
              className="home-hero__social-icon"
              rel="noreferrer"
            />
          </a>
        </div>
      </div>
        
  )
}
