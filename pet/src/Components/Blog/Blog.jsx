import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import Blog1 from '../../assets/blog1.png';
import Blog2 from '../../assets/blog2.png';
import Blog3 from '../../assets/blog3.png';
import './Blog.css';

export default function Blog() {
  return (
    <div className='blog'>
      <h1>BLOG</h1>
      <Container className='py-5'>
        <Row className="g-4">
          <Col xs={12} sm={12} md={6} lg={4}>
            <Card>
              <Card.Img variant="top" src={Blog1} />
              <Card.Body>
                <Card.Title>The Importance of</Card.Title>
                <Card.Title>Regular Grooming</Card.Title>
                <Card.Title>for Pet Health</Card.Title>
                <Link to='/blog1'><Button variant="primary">Read More</Button></Link>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4}>
            <Card>
              <Card.Img variant="top" src={Blog3} />
              <Card.Body>
                <Card.Title>Creating a Pet-</Card.Title>
                <Card.Title>Friendly Home: Tips for</Card.Title>
                <Card.Title>a Happy Coexistence</Card.Title>
                <Link to='/blog2'><Button variant="primary">Read More</Button></Link>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4}>
            <Card>
              <Card.Img variant="top" src={Blog2} />
              <Card.Body>
                <Card.Title>Traveling with Pets:</Card.Title>
                <Card.Title>A Comprehensive</Card.Title>
                <Card.Title>Guide for Pet Parents</Card.Title>
                <Link to='/blog3'><Button variant="primary">Read More</Button></Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
