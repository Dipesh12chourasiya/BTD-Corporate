import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Social-media.css'

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-plug',
    title: 'SEARCH ENGINE OPTIMIZATION',
    description: `Struggling to get your website seen by the right audience? Our SEO optimization services can help.`
  },
  {
    id: 2,
    icon: 'fas fa-snowflake',
    title: 'GRAPHIC DESIGNING',
    description: 'We speak volumes through visuals. Our graphic design services create impactful logos, branding materials, and print & digital designs to elevate your brand and captivate your audience.'
  },
  {
    id: 3,
    icon: 'fas fa-clone',
    title: 'WEB DESIGNING',
    description: "We design stunning, user-friendly websites that grow your business. From concept to mobile-friendly masterpiece, we've got you covered."
  },
  {
    id: 4,
    icon: 'fas fa-users',
    title: 'SOCIAL MEDIA MARKETING',
    description: 'Let us amplify your brand voice and engage your audience across social media platforms. We create and manage social media campaigns that drive brand awareness and conversions.'
  },
  {
    id: 5,
    icon: 'fas fa-desktop',
    title: 'CONTENT MARKETING',
    description: 'Craft engaging content that captivates your audience and fuels your sales pipeline. We offer content marketing services to boost brand awareness and drive results.'
  },
  {
    id: 6,
    icon: 'fas  fa-mobile',
    title: 'Responsive Design',
    description: 'We build websites that flawlessly adapt to any screen, ensuring a seamless user experience on desktops, tablets, and mobiles.'
  },
]

function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Digital Marketing Services</h2>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                    <Col sm={4} className='holder' key={services.id}>
                  <div className="icon">
                    <i className={services.icon} ></i>
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                  <a href='/social-media-marketing'>
                    <button className="button-87" role="button">View More</button>
                  </a>
                  
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;