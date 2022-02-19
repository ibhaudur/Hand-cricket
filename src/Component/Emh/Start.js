import React from 'react';
import './Emh.css'
import { Button, Container,Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Start = () => {
  return <React.Fragment>
      <Container fluid className='st'>
      <Row className="justify-content-end">
          <Col>
            <h1 className="scr">Hand-Cricket</h1>
          </Col>
        </Row>
          <Row className='justify-content-center sr'>
              <Col xs={4} sm={3} lg={2} xl={1}>
              <Link className='li' to="./emh"><Button className='be' variant='success' size='lg'>Start</Button></Link>
              </Col>
          </Row>
      </Container>

  </React.Fragment>;
};
