import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

import './contact.css'
import { useState } from 'react';

function AppContact() {

  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [phone , setPhone] = useState('');
  const [message , setmessage] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    if(!name && !email && !message){
      alert("Please fill all details.");
      return;
    }
    const formData = new FormData(event.target);

    formData.append("access_key", "eef92e51-a70b-4b61-928e-652309c1de18");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert(res.message);
      setName('');
      setEmail('');
      setPhone('');
      setmessage('');
    }
  };


  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact Us</h2>
          <div className="subtitle">We'd love to talk about Marketing</div>
        </div>
        <Form className='contact-form' onSubmit={onSubmit}>
          <Row>
            <Col sm={4}>
              <Form.Control onChange={(e)=>setName(e.target.value)} value={name} name='Name' type="text" placeholder="Enter your full name" required />
            </Col>
            <Col sm={4}>
              <Form.Control onChange={(e)=>setEmail(e.target.value)} value={email} name='Email' type="email" placeholder="Enter your email address" required />
            </Col>
            <Col sm={4}>
              <Form.Control onChange={(e)=>setPhone(e.target.value)} value={phone} name='Contact Number' type="tel" placeholder="Enter your contact number" required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control onChange={(e)=>setmessage(e.target.value)} value={message} name='Message' as="textarea" placeholder="Enter your message" required />
            </Col>
          </Row>
          <div className='btn-holder'>
            <button className='button' type="submit">Submit</button>
          </div>
        </Form>
      </Container>
      {/* <Container fluid>
        <div className='contact-info'>
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              hello@domain.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              000-000-0000
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              London, United Kingdom
            </li>
          </ul>
        </div>
      </Container> */}
    </section>
  );
}

export default AppContact;