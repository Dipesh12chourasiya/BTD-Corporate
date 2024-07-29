import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* <Navbar.Brand href="#home">Black Tie Digital</Navbar.Brand> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: "55px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              objectFit: "contain",
              marginRight: "15px",
            }}
            src={require("../assets/logos/BlackTielogoCropped.jpeg")}
          />
          <h3 style={{ color: "white", position: "relative", top: "10px" }}>
            <b>Black Tie Digital</b>
          </h3>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="/clients">Clients</Nav.Link>
            <Nav.Link href="/black-tie-events">Black Tie Events</Nav.Link>
            <Nav.Link href="/black-tie-invitations">
              Black Tie Invitations
            </Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
