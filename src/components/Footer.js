import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rickson-henrique-570109219/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://wa.me/5511976805176"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/henriiquerick/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
            <a href="https://www.youtube.com/watch?v=hYv6BM2fWd8&list=PLd0qRSEDFQI7DgB5BKHQrryFlR02n1bK-&index=1">Video credits</a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
