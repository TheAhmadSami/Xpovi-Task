import { useState } from "react";
import { Container, Row } from "react-bootstrap";

import headerBg from './../../assets/media/xpovi.png';

import './Header.scss'

export default function Header() {

  return (
    <div id="header" className="_page">
      <Container>
        <Row>

          <div className="col-lg-6">
            <div className="info-section">
              <p className="slogan">Jump start your growth</p>
              <h1>
                We boost the growth<br />
                for <span>startup</span> to Fortune 500 companies
              </h1>
              <p className="info">Get the most accurate leads, sales people traingin and conversions, tools and more - allwithin the same one billing</p>
              <a href="/questions" className="header-btn">Create Business Plan</a>
            </div>
          </div>

          <div className="col-lg-6">
            <img src={headerBg} alt="Xpovi Header" className="header-img"/>
          </div>



        </Row>
      </Container>
    </div>
  )

}