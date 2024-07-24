import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/esm/Image';
import img1 from '../assets/images/socialMedia.jpg';
import img2 from '../assets/images/feature.jpg';

const SocialMedia = () => {
  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div style={{margin:'55px 0px', textAlign:'start'}} className="title-holder">
          <h2>Social Media Packages</h2>
        </div>
        <Row>
          <Col sm={6}>
          <Image style={{borderRadius:'12px'}} className='about-img' src={img1} />
          </Col>
          <Col sm={6} className='features'>
            <p>1. Social Media Platforms - Instagram, Facebook, Linkedin, Google, Youtube</p>
            <p>2. 12-15 posts (including reels) Graphics & poster creation (high quality)</p>
            <p>3. High quality Reels</p>
            <p>4. High quality original content creation</p>
            <p>5. Regular Profile updation & optimization</p>
            <p>6. Weekly plans & Themes</p>
            <p>7. Weekly performance analysis report</p>
            <p>8. Competitor's analysis & research</p>
            <p>9. Advertisements & Promotion marketing</p>
            <p>10. One assigned manager for all social media platforms.</p>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <div style={{margin:'55px 0px', textAlign:'start'}} className="title-holder">
          <h2>Features</h2>
        </div>
        <Row>
          <Col sm={6}>
            <p>1. Initial Campaign</p>
            <p>2. Daily story posting</p>
            <p>3. Branding Strategy</p>
            <p>4. Continuous monitoring of all social media platforms.</p>
            <p>5. Response Management</p>
            <p>6. Daily work tracker</p>
            <p>7. Hashtag creation</p>
            <p>8. Target audience research</p>
            <p>9. Marketing across all social media sites.</p>
            <p>10. Messaging prime customers ccasionally.</p>
          </Col>
          <Col sm={6}>
          <Image style={{borderRadius:'12px'}} className='img2' src={img2} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SocialMedia
