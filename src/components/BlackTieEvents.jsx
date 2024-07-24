import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img1 from "../assets/images/birthday.jpg";
import img2 from "../assets/images/corporateEvents.jpg";
import img3 from "../assets/images/wedding.jpg";

import "./About.css";
import "./BlackTieEvents.css";

const BlackTieEvents = () => {
  return (
    <section className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h1>Welcome to Black Tie Events</h1>
        </div>
        <div>
          <h2 style={{marginTop:'38px'}}>Experience the Elegance of Expert Event Management</h2>
          <p>
            With over 9 years of unparalleled experience in the event management
            industry, Black Tie Events has become a trusted name in creating
            unforgettable experiences. We specialize in a diverse range of
            events, each tailored to meet the unique needs and preferences of
            our clients.
          </p>
        </div>
        <Row>
          <h3 style={{ fontSize: "30px", marginTop:'40px'}}>Our Services</h3>
        </Row>
        <Row>
          <Col sm={4} className="textCon">
            <div className="imgCon1">
              <Image className="" src={img1} />
            </div>
            <div className="divCon1">
              <h3 className="subTitle">Birthday Parties</h3>
              <p className="subTitle">
                Make every birthday a milestone with our meticulously planned
                parties, designed to bring joy and excitement to all age groups.
              </p>
            </div>
          </Col>
          <Col sm={4} className="textCon">
            <div className="imgCon1">
              <Image className="" src={img2} />
            </div>
            <div className="divCon1">
              <h3 className="subTitle">Corporate Events</h3>
              <p className="subTitle">
                From small meetings to large conferences, our corporate event
                planning ensures seamless execution, professional atmosphere,
                and impactful experiences.
              </p>
            </div>
          </Col>
          <Col sm={4} className="textCon">
            <div className="imgCon1">
              <Image className="" src={img3} />
            </div>
            <div className="divCon1">
              <h3 className="subTitle">Weddings</h3>
              <p className="subTitle">
                Celebrate love in style with our comprehensive wedding planning
                services, covering everything from venue selection to intricate
                details, making your dream wedding a reality.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
            <div>
                <h3 style={{ fontSize: "30px", marginTop:'40px'}}>Why Choose Us?</h3>
            </div>
            <div >
                <p><span className="bold">Expertise and Experience:</span> With a seasoned team and a history of successful events, we bring expertise and innovation to every project.</p>
                <p><span className="bold">Customized Solutions:</span> We tailor our services to meet your specific needs, ensuring each event reflects your vision and style.</p>
                <p><span className="bold">Attention to Detail:</span> Our commitment to perfection means no detail is overlooked, creating seamless and memorable experiences</p>
                <p><span className="bold">Comprehensive Planning:</span> From initial concept to final execution, we manage all aspects of your event, providing a stress-free experience for you.</p>
            </div>
        </Row>
        <Row>
            <div>
                <h3 style={{ fontSize: "30px", marginTop:'40px'}}>Let’s Create Unforgettable Memories</h3>
            </div>
            <p>At Black Tie Events, we believe in the power of extraordinary celebrations. Whether it’s an intimate gathering or a grand affair, we are dedicated to making your event a resounding success. Contact us today to start planning your next unforgettable event.</p>
        </Row>
      </Container>
    </section>
  );
};

export default BlackTieEvents;