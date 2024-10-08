import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Stack from "react-bootstrap/esm/Stack";
import Nav from 'react-bootstrap/Nav';
// import {Image} from 'react-bootstrap';

import './footer.css';
import Image from "react-bootstrap/esm/Image";

function AppFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 400) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Container fluid>
      <Row className="text-white p-4">
        <Col className="m-in-f-logo" sm={3}>
            <div className="footerLogoDiv">
               <Image className="fLogo" src={require('../assets/logos/BlackTielogoCropped.jpeg')} alt="company-logo"
               rounded
               width={150}
               height={150}
               />
               <div>
                  {/* <h3 className="footeH3">Black Tie Digital</h3> */}
                  <p className="footer-p fotSUb">Right Strategies, Implementation and Success.</p>
               </div>
            </div>
        </Col>
        <Col sm={3}>
           <Nav className="flex-column fs-5" style={{display: "flex", justifyContent:'center', alignItems:'center', marginBottom:'37px'}}>
             <p style={{fontSize:'19px'}}>Useful Links</p>
            <Nav.Link className="footer-link" href="/">Home</Nav.Link>
            <Nav.Link className="footer-link" href="#about">About</Nav.Link>
            <Nav.Link className="footer-link" href="/clients">Clients</Nav.Link>
            <Nav.Link className="footer-link" href="/black-tie-events">Black Tie Events</Nav.Link>
            <Nav.Link className="footer-link" href="/black-tie-invitations">Black Tie Invitations</Nav.Link>
           </Nav>
        </Col>
        <Col sm={3} style={{display: "flex",flexDirection:'column', alignItems:'center', marginBottom:'37px'}}>
            <h4>Contact Us!</h4>
            <p>itsblacktiedigital@gmail.com</p>
            <p className="phoneNumber">+91 8890099108</p>
        </Col>
        <Col sm={2}>
          <div className="socials">
            <ul>
              <li className="listItem"><a href="https://wa.me/9131959986" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a></li>
              <li className="listItem"><a href="https://www.linkedin.com/in/black-tie-digital-247932222?originalSubdomain=in" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
              <li className="listItem"><a href="https://www.instagram.com/itsblacktiedigital?igsh=MXR3ZWE4Z3VzcWcweg==" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
              <li className="listItem"><a href="https://g.co/kgs/jz5rQQD" target="_blank" rel="noreferrer"><i className="fab fa-google"></i></a></li>
              <li className="listItem"><a href="https://www.facebook.com/p/Black-Tie-Digital-100076432320175/?paipv=0&eav=AfbBby4DL0AmLuPoUlu6IS_5Pc_6RZr5plWpYW8aCmMk_vyzxMIZ0zLaSbLaxPeuoDc&_rdr" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a></li>
              <li className="listItem"><a href="https://rohit-mishra.vercel.app/" target="_blank" rel="noreferrer"><i className="fa fa-user"></i></a></li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row>
        <p style={{textAlign:'center',color:'white'}}>&copy; All Right Reserved. Black Tie Digital</p>
      </Row>
      {
        showTopBtn && (
          <div className="go-top" onClick={goTop}></div>
        )
      }
    </Container>
  )
}

export default AppFooter;


// ref =   https://medium.com/@racosta323/create-a-simple-footer-using-react-bootstrap-58c4371a4ade