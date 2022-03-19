import { useState } from "react";
import { Button, Card } from "react-bootstrap";

const CardDescription = (props) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <Card className="text-center">
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        <Card.Title>{props.subTitle}</Card.Title>
        {!isOpened ? <Card.Text>{props.text}</Card.Text> : null}
        <Button color="primary" onClick={handleClick}>
          Descri&ccedil;&atilde;o
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardDescription;
