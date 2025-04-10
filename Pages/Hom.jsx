
import img1 from './Images/humm.jpg'
import img2 from './Images/humm1.jpg'
import img3 from './Images/humm3.jpg'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Carousel from 'react-bootstrap/Carousel';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home=()=>{
    return(
        <>        
        <h1 className="con">myApp</h1>
 
        <br />
      <Navbar bg="primary" data-bs-theme="dark">

        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />

      <Carousel>
      <Carousel.Item>
      <img src={img1}  width="100%" height="300" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={img2}  width="100%" height="300" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={img3}  width="100%" height="300" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <br />

    <Container>
      <Row>
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
      </Row>
    </Container>

    <div className="ima">

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <br />

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <br />

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
            </>

    )
}

export default Home;