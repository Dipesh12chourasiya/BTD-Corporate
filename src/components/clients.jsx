import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/esm/Image";
import CountUp from 'react-countup';
import './Clients.css';

import './About.css';
import { useState , useRef } from "react";
import ScrollTrigger from 'react-scroll-trigger'

function AppClient() {
  //   const html = 80;
  //   const responsive = 95;
  //   const photoshop = 60;

  const [countOn, setCountOn] = useState(false);
  const triggerRef = useRef(null);

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder" style={{marginTop:'42px'}}>
          <h2>Some Of Our clients</h2>
          <p className="subtitle">Welcome to the testament of our success – a showcase of the incredible brands and businesses we've had the privilege to partner with. At Socialee, we take pride in collaborating with diverse clients across industries, bringing their visions to life in the digital realm.</p>
        </div>

        <Row ref={triggerRef}>
          <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)}>
          <div className="numberCon">
            <div className="textCon">
              <h2>{countOn && <CountUp start={0} end={1000} duration={2} delay={0}/>}+</h2>
              <p>Clients Served</p>
            </div>
            <div className="textCon">
              <h2>{countOn && <CountUp start={0} end={50} duration={2} delay={0}/>}+</h2>
              <p>Creative Brains</p>
            </div>
            <div className="textCon">
              <h2>{countOn && <CountUp start={0} end={9} duration={2} delay={0}/>}+</h2>
              <p>Years of Expertise</p>
            </div>
            <div className="textCon">
              <h2>{countOn && <CountUp start={0} end={35} duration={2} delay={0}/>}+</h2>
              <p>Content Creators</p>
            </div>
          </div>
          </ScrollTrigger>
        </Row>
        <Row >
            {/* 7 3 4 5 6 1 2 8*/}
            <Col xs={4} sm={3} className="center">
            <div className="imgCon">
                <Image src={require('../assets/logos/7.png')}/>
                <p className="p-center">Dubai Fashion Magazine</p>
            </div>
          </Col>
          <Col xs={4} sm={3} className="center">
            <div className="imgCon">
                <Image src={require('../assets/logos/3.png')}/>
                <p className="p-center">LiuGong</p>
            </div>
          </Col>
          <Col xs={4} sm={3} className="center">
            <div className="imgCon">
                <Image src={require('../assets/logos/4.png')}/>
                <p className="p-center">iVARSITY UK</p>
            </div>
          </Col>
          <Col xs={4} sm={3} className="center">
            <div className="imgCon">
                <Image src={require('../assets/logos/5.png')}/>
                <p className="p-center">Chai Sutta Bar</p>
            </div>
          </Col>
          <Col xs={4} sm={3} className="center">
            <div className="imgCon">
                <Image src={require('../assets/logos/6.png')}/>
                <p className="p-center">Ghunghru Palace Jewellers</p>
            </div>
          </Col>
          <Col xs={4} sm={3} className="center">
            <div className="imgCon">
                <Image src={require('../assets/logos/1.jpeg')} />
                <p className="p-center">Frheta</p>
            </div>
          </Col>
          <Col xs={4} sm={3} className="center">
            <div className="imgCon">
                <Image src={require('../assets/logos/2.png')}/>
                <p className="p-center">Astrologer Piyush</p>
            </div>
          </Col>
          <Col xs={4} sm={3} className="center">
            <div className="imgCon">
                <Image src={require('../assets/logos/8.png')}/>
                <p className="p-center">OREE Reality</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppClient;
