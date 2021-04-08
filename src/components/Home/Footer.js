import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrap">
        <p>© 2021 Airbnb clone. Privacy · Terms · Sitemap · Company Details</p>
        <div class="social">
          <a href="https://www.facebook.com/andrey.king.188/">
            <FacebookIcon className="social-icon" />
          </a>
          <a href="https://www.instagram.com/andrayscott/">
            <InstagramIcon className="social-icon" />
          </a>
          <a href="https://github.com/andreyscott">
            <GitHubIcon className="social-icon" />
          </a>
          <a href="https://twitter.com/AndrewIrorere">
            <TwitterIcon className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/andrew-irorere-b63a601b8/">
            <LinkedInIcon className="social-icon" />
          </a>
        </div>
      </div>
      <p>Created by Andrew Irorere @andreyscott</p>
    </div>
  );
}

export default Footer;
