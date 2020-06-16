import React, { Component } from "react";
import "../App.css";
import { ReactComponent as Logo } from "./img/dexOwl.svg";
export default class Footer extends Component {

  render() {

    return (
      <footer className="footer-container">
        <Logo className="logo" id="foot-logo" />
        <div className="footer-links-container">
          <p className="footer-links">Sitemap</p>
          <ul>
            <li className="footer-links" >
              <a className="footer-links" href="/" Home>
                Home
              </a>
            </li>
            <li className="footer-links" >
              <a className="footer-links" href="/create" Create>
                Create
              </a>
            </li>
            <li className="footer-links" >
              <a className="footer-links"  href="/list" List>
                List
              </a>
            </li>
          </ul>
          <ul>
            <li className="footer-links">
              <a className="footer-links" href="/subject/browse?flashcardSet_category=Math" Math>
                Math
              </a>
            </li>
            <li className="footer-links">
              <a className="footer-links" href="/subject/browse?flashcardSet_category=Science" Science>
                Science
              </a>
            </li>
            <li className="footer-links">
              <a className="footer-links" href="/subject/browse?flashcardSet_category=English">
                English
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-social-media">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <ul className="social-media-links">
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-twitter"></a>
            <a href="#" className="fa fa-reddit"></a>
            <a href="#" className="fa fa-google"></a>
          </ul>
        </div>
        <div  className="copyright">
        <p>© 2020 All Rights Reserved ~ Authored by AD410 Group C</p>
        </div>
      </footer>
    );
  }
}
