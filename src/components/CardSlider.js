import { Container, Row, Col } from "react-bootstrap";
import { useIntl } from "react-intl";

const CardSlider = () => {
    const intl = useIntl();
  return (
    <Container>
      <div className="CardSliderData shadowCard">
        <div className="cardChild">
          <div className="sliderTitle">
            {intl.formatMessage({ id: "percClaim" })}
          </div>

          <Row className="slider-data-box">
            <Col className="slider-right-div">
              <div className="sliderButton">
                {intl.formatMessage({ id: "newBi" })}
              </div>
            </Col>
            <Col>
              <div className="slider-copy">
                {intl.formatMessage({ id: "copyC" })}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default CardSlider;
