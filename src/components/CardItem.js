import { Card } from "react-bootstrap";
import ProgressBarItem from './ProgressBarItem'



const CardItem = ({
  amount,
  currency,
  progressColor1,
  progressColor2,
  progressTitle1,
  progressTitle2,
  progressAmount1,
  progressAmount2,
  progressCounter1,
  progressCounter2,
}) => {
  return (
    <Card className="Card shadowCard">
      <Card.Body>
        <Card.Title className="cardTitle">
          {amount}
          <span className="currency">{currency}</span>
        </Card.Title>
        <Card.Subtitle className="mb-5 text-muted">
          Total Value of Disbursement
        </Card.Subtitle>
        <Card.Text>
          <ProgressBarItem
            progressColor={progressColor1}
            progressAmount={progressAmount1}
            progressTitle={progressTitle1}
            currency="$"
            progressCounter={progressCounter1}
          />

          <ProgressBarItem
            progressColor={progressColor2}
            progressAmount={progressAmount2}
            progressTitle={progressTitle2}
            currency="$"
            progressCounter={progressCounter2}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
