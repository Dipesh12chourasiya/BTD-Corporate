import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import CountUp from 'react-countup';
import img1 from "../assets/images/about.png";

import './About.css';
import { useState , useRef } from "react";
import ScrollTrigger from 'react-scroll-trigger'

function AppAbout() {
  //   const html = 80;
  //   const responsive = 95;
  //   const photoshop = 60;

  const [countOn, setCountOn] = useState(false);
  const triggerRef = useRef(null);

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
        </div>
        <Row>
          <Col sm={6}>
            <Image className='about-img' src={img1} />
          </Col>
          <Col sm={6} className="mobile-view">
            <p>
              We began working remotely and have now been on the field for over
              a year. Every year, we serve over 100 happy clients. Recently our
              firm got incubated in AIC Prestige.
            </p>
            <p>
              We are dedicated to being open and honest with our clients. Our
              reports are designed to help clients understand the efforts that
              went into their campaign as well as the results.
            </p>
            <p>
              We are transparent about what we do and how we do it for our
              clients in order to provide the highest long-term value. We are
              always available to assist them and guide them through the process
              of analyzing how their campaigns are doing or we can do to
              contribute positively to them.
            </p>
          </Col>
        </Row>

        <Row ref={triggerRef}>
          <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)}>
          <div className="numberCon">
            <div className="textCon">
              <h2>{countOn && <CountUp start={0} end={9} duration={2} delay={0}/>}+</h2>
              <p>Years of Expertise</p>
            </div>
            <div className="textCon">
              <h2>{countOn && <CountUp start={0} end={1000} duration={2} delay={0}/>}+</h2>
              <p>Clients Served</p>
            </div>
            <div className="textCon">
              <h2>{countOn && <CountUp start={0} end={50} duration={2} delay={0}/>}+</h2>
              <p>Creative Brains</p>
            </div>
            <div className="textCon">
              <h2>{countOn && <CountUp start={0} end={35} duration={2} delay={0}/>}+</h2>
              <p>Content Creators</p>
            </div>
          </div>
          </ScrollTrigger>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;
