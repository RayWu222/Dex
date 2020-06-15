import React, { Component } from "react";
import { ReactComponent as Logo } from "./img/dexOwl.svg";
export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-container">
        <div className="footer links left">
          <Logo className="footer-logo" />
        </div>
        <div className="footer-links">
          <strong>Pages</strong>
          <ul>
            <li>
              <a className="home" href="/" Home>
                Home
              </a>
            </li>
            <li>
              <a href="/create" Create>
                Create
              </a>
            </li>
            <li>
              <a href="/list" List>
                List
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-subject">
          <strong>Subjects</strong>
          <ul>
            <li>
              <a href="/subject/browse?flashcardSet_category=Math" Math>
                Math
              </a>
            </li>
            <li>
              <a href="/subject/browse?flashcardSet_category=Science" Science>
                Science
              </a>
            </li>
            <li>
              <a href="/subject/browse?flashcardSet_category=English">
                English
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-social-media">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
          <strong>Social Media:</strong>
          <ul>
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-twitter"></a>
            <a href="#" className="fa fa-reddit"></a>
            <a href="#" className="fa fa-google"></a>
          </ul>
        </div>
        <div class="copy-colorblack">
          <p>© 2020 All Rights Reserved ~ Authored by AD410 Group C</p>
        </div>
      </footer>
    );
  }
}
