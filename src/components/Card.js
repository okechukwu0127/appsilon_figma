import { Container, Row, Col } from "react-bootstrap";
import { useIntl } from "react-intl";
import CardItem from './CardItem'

const CardData = () => {
  const intl = useIntl();



  return (
    <Container style={{ paddingTop: 20 }}>
      <Row>
        
        <Col xs={12} sm={6} md={4}>
          <CardItem
            amount="1000"
            currency="$"
            progressColor1="bg-success-pro"
            progressColor2="bg-primary-pro"
            progressAmount1="400"
            progressAmount2="800"
            progressTitle1={intl.formatMessage({ id: "policy" })}
            progressTitle2={intl.formatMessage({ id: "claim" })}
            progressCounter1="65"
            progressCounter2="80"
          />
        </Col>

        <Col xs={12} sm={6} md={4}>
          <CardItem
            amount="2500"
            currency="$"
            progressColor1="bg-success-pro"
            progressColor2="bg-primary-pro"
            progressAmount1="1100"
            progressAmount2="1400"
            progressTitle1={intl.formatMessage({ id: "policy" })}
            progressTitle2={intl.formatMessage({ id: "claim" })}
            progressCounter1="65"
            progressCounter2="80"
          />
        </Col>

        <Col xs={12} sm={6} md={4}>
          <CardItem
            amount="2500"
            currency="$"
            progressColor1="bg-success-pro"
            progressColor2="bg-primary-pro"
            progressAmount1="1100"
            progressAmount2="1400"
            progressTitle1={intl.formatMessage({ id: "policy" })}
            progressTitle2={intl.formatMessage({ id: "claim" })}
            progressCounter1="65"
            progressCounter2="80"
          />
        </Col>
        
      </Row>
    </Container>
  );
};

export default CardData;
