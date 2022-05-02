import { Container, Row, Col } from "react-bootstrap";

const CardSlider = () => {
  return (
    <Container>
      <div className="CardSliderData shadowCard">
        <div className="cardChild">
          <div className="sliderTitle">20% Safe On Your First Account</div>

          <Row className="slider-data-box">
            <Col className="slider-right-div">
              <div className="sliderButton">NEWBIE20</div>
            </Col>
            <Col>
              <div className="slider-copy">Copy Code</div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default CardSlider;
