import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

function TestimonialCarousel() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item>
              <p className="testimonial-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit mauris eu convallis convallis."</p>
              <p className="testimonial-author">- John Doe</p>
            </Carousel.Item>
            <Carousel.Item>
              <p className="testimonial-text">"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."</p>
              <p className="testimonial-author">- Jane Smith</p>
            </Carousel.Item>
            <Carousel.Item>
              <p className="testimonial-text">"Vestibulum rhoncus euismod tellus, a fringilla orci vulputate eu. Fusce malesuada fermentum aliquet."</p>
              <p className="testimonial-author">- Robert Johnson</p>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default TestimonialCarousel;
