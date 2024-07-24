import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Stack from "react-bootstrap/esm/Stack";
import Nav from 'react-bootstrap/Nav';
// import {Image} from 'react-bootstrap';

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
        <Col className="m-in-f-logo">
            <Stack>
               {/* <Image src={require('../assets/images/rada-exp-logo.png')} alt="company-logo"
               rounded
               width={150}
               height={150}
               /> */}
               <h2 style={{fontWeight:'600'}}>Black Tie Digital</h2>
               <p>Right Strategies, Implementation, and Success.</p>
            </Stack>
        </Col>
        <Col>
           <Nav className="flex-column fs-5" style={{display: "flex", justifyContent:'start'}}>
             <p style={{fontSize:'19px'}}>Useful Links</p>
            <Nav.Link className="footer-link" href="/">Home</Nav.Link>
            <Nav.Link className="footer-link" href="#about">About</Nav.Link>
            <Nav.Link className="footer-link" href="/black-tie-events">Black Tie Events</Nav.Link>
            <Nav.Link className="footer-link" href="/black-tie-invitations">Black Tie Invitations</Nav.Link>
           </Nav>
        </Col>
        <Col>
            <h4>Contact Us!</h4>
            <p>Address: </p>
            <p>Email: </p>
            <p className="phoneNumber">Phone: </p>
        </Col>
        <Col>
          <div className="socials">
            <ul>
              <li><a href="https://wa.me/9131959986" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a></li>
              <li><a href="https://rohit-mishra.netlify.app/" target="_blank" rel="noreferrer"><i className="fa fa-user"></i></a></li>
              <li><a href="https://www.linkedin.com/in/rohit-mishra-5184341a2/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
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