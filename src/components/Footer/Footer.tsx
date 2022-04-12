import { useState } from "react";
import { Container, Row, } from "react-bootstrap";
import { Logo } from '..'

import './Footer.scss'

export default function Footer() {

  return (
    <div id="footer">
      <Container>
        <Row className="justify-content-center">

          {/* slogan */}
          <div className="col-lg-3 col-md-6 p-3">
            <Logo />
            <p className="footer-text">This SPA is designed and developed by <a href="http://theahmadsami">Ahmad Sami</a> for Xpovi company at April 11th, 2022 and any use of it without his written permission puts you under legal liability.</p>
            <div className="social">
              <a href="https://facebook.com/theahmadsami" target="_blank"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com/theahmadsami" target="_blank"><i className="fab fa-twitter"></i></a>
              <a href="https://linkedin.com/in/theahmadsami" target="_blank"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-6 p-3">
            <p className="footer-title">Company</p>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">How it Works</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Get Help */}
          <div className="col-lg-2 col-md-6 p-3">
            <p className="footer-title">Get Help</p>
            <ul>
              <li><a href="#">Support Career</a></li>
              <li><a href="#">24h Service</a></li>
              <li><a href="#">Quick Chat</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-lg-2 col-md-6 p-3">
            <p className="footer-title">Support</p>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="a">Policy</a></li>
              <li><a href="#">Business</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-2 p-3">
            <p className="footer-title">Contact</p>
            <ul>
              <li><a href="#">WhatsApp</a></li>
              <li><a href="#">Support 24</a></li>
            </ul>
          </div>


        </Row>
      </Container>
    </div>
  )

}