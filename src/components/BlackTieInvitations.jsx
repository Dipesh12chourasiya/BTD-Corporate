import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Image from "react-bootstrap/Image";

// import img4 from "../assets/images/party.jpg";

// import birdayImg1 from "../assets/events/bdimg2.jpg";
import birthdayVid from "../assets/video/birthdayInvi.mp4"
import corVid from "../assets/video/corporateVid.mp4"
import weddingVid from "../assets/video/weddingVid.mp4"
import partyVid from "../assets/video/partyVid.mp4"

// import cor1 from '../assets/events/cor1.jpg'

// import wedding1 from "../assets/events/wedding1.jpg"

import "./About.css";
import "./BlackTieInvitations.css";


// video download link 
// https://www.ssvid.net/

const BlackTieInvitations = () => {
  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h1>Welcome to Black Tie Invitations</h1> 
        </div>
        <div>
          <h2 style={{marginTop:'38px'}}>Elegance and Convenience in Every Click</h2>
          <p>
          Welcome to Black Tie Invitations, your premier destination for exquisite e-invitations. Our platform combines sophisticated design with cutting-edge technology to bring you the perfect solution for all your invitation needs.
          </p>
        </div>
        <Row>
          <h3 style={{ fontSize: "30px", marginTop:'40px', textAlign:'center'}}>Our Services</h3>
        </Row>
        <Row>
          <Col sm={3} className="textCon">
            <div className="imgConInvi">
              <video width='350px' height='400px' autoPlay loop muted >
                  <source
                    src={birthdayVid}
                    type="video/mp4"
                    allowFullScreen
                  />
                </video>
            </div>
            <div className="divConInvi">
              <h3 className="subTitle">Birthday Invitations</h3>
              <p className="subTitle">
                Make every birthday celebration unforgettable with our customizable e-invitations, perfect for all ages and themes.
              </p>
            </div>
          </Col>
          <Col sm={3} className="textCon">
            <div className="imgConInvi">
              <video width='350px' height='400px' autoPlay loop muted>
                    <source
                      src={corVid}
                      type="video/mp4"
                      allowFullScreen
                    />
                  </video>
            </div>
            <div className="divConInvi">
              <h3 className="subTitle">Corporate Event Invitations</h3>
              <p className="subTitle">
              Impress your colleagues and clients with our professional e-invitations, tailored for corporate events, meetings, and conferences.
              </p>
            </div>
          </Col>
          <Col sm={3} className="textCon">
            <div className="imgConInvi">
              {/* <Image className="" src={wedding1} /> */}
                <video width='350px' height='400px' autoPlay loop muted>
                  <source
                    src={weddingVid}
                    type="video/mp4"
                    allowFullScreen
                  />
                </video>
            </div>
            <div className="divConInvi">
              <h3 className="subTitle">Weddings Invitations</h3>
              <p className="subTitle">
              Celebrate your love story with our beautifully crafted e-invitations, designed to reflect the elegance and romance of your special day.
              </p>
            </div>
          </Col>
          <Col sm={3} className="textCon">
            <div className="imgConInvi">
              {/* <Image className="" src={img4} /> */}
              <video width='350px' height='400px' autoPlay loop muted>
                  <source
                    src={partyVid}
                    type="video/mp4"
                    allowFullScreen
                  />
                </video>
            </div>
            <div className="divConInvi">
              <h3 className="subTitle">Party Invitations</h3>
              <p className="subTitle">
              Whether it’s a casual get-together or a grand celebration, our party invitations are designed to set the tone for your event.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
            <div>
                <h3 style={{ fontSize: "30px", marginTop:'40px'}}>Why Choose Black Tie Invitations?</h3>
            </div>
            <div >
                <p><span className="bold">Exquisite Designs:</span> Our collection features a wide range of stunning designs, crafted by talented designers to suit every occasion and style.</p>
                <p><span className="bold">User-Friendly Platform:</span> Our intuitive platform makes it easy to create, customize, and send e-invitations, saving you time and effort.</p>
                <p><span className="bold">Eco-Friendly Solution:</span> By choosing e-invitations, you’re making an environmentally conscious choice that reduces paper waste.</p>
                <p><span className="bold">Instant Delivery:</span> Send your invitations instantly via email or social media, ensuring they reach your guests promptly.</p>
                <p><span className="bold">Customization Options:</span> Personalize your invitations with custom text, images, and themes to create a unique and memorable invite.
                </p>
            </div>
        </Row>
        <Row>
            <div>
                <h3 style={{ fontSize: "30px", marginTop:'40px'}}>Create Beautiful Invitations Effortlessly</h3>
            </div>
            <p>At Black Tie Invitations, we understand the importance of first impressions. Our e-invitations are designed to captivate your guests and set the stage for a memorable event. Explore our collection today and start creating beautiful, personalized invitations that leave a lasting impression.</p>
        </Row>
        <Row>
            <div>
                <h3 style={{ fontSize: "30px", marginTop:'40px'}}>Get Started Today</h3>
            </div>
            <p>Ready to create the perfect e-invitation? Browse our collection, customize your design, and send your invites in just a few clicks. Let Black Tie Invitations help you celebrate your special moments with style and convenience.</p>
        </Row>
      </Container>
    </section>
  )
}

export default BlackTieInvitations
