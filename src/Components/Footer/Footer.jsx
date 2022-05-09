import React from "react";
import './Footer.css'

export const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-header dis_flex">
          <p>Made by Tanjum</p>
        </div>
        <ul className="social_media_links dis_flex gap_s">
          <li className="list-item-inline">
            <a href="https://github.com/Tanjum786" target="blank_">
              <i className="icon_footer padding_small fab fa-github"></i>
            </a>
          </li>
          <li className="list-item-inline">
            <a
              href="https://www.linkedin.com/in/tanjum-kadakol-665a69225/"
              target="blank_"
            >
              <i className="icon_footer padding_small fab fa-linkedin"></i>
            </a>
          </li>
          <li className="list-item-inline">
            <a href="https://twitter.com/KadakolTanjum" target="blank_">
              <i className="icon_footer padding_small fa-brands fa-twitter-square fotter_icon"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
