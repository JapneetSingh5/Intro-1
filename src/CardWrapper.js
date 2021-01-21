import { Card, CardImg, CardText, CardBody, CardImgOverlay, CardTitle, CardFooter, CardHeader, Collapse} from 'reactstrap';
import React, {useState} from 'react';
import './App.css';

function CardWrapper({entryNum, name, image, branch, about, contact1, contact2}) {
  const [isOpen, setIsOpen] =useState(false);
  const toggle= () => setIsOpen(!isOpen);
  console.log("123");

  return (
    <div className="CardWrapper col-12 col-sm-6 col-md-4" key={entryNum} onClick={toggle}>
      <Collapse isOpen={!isOpen}>
        <Card class="card" inverse>
          <CardImg max-height="350px" src={image} alt={name}  />
          <CardImgOverlay className="overlay">
              <CardTitle tag="h2">{name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </Collapse>
      <Collapse isOpen={isOpen}>
        <Card class="card col-12 col-sm-6 col-md-4" key={entryNum}>
          <CardHeader tag="h2">{name}</CardHeader>
          <CardBody>
            <CardText tag='h5'>Branch: {branch}</CardText>
            <CardText tag='h5'>
              About
              <CardText tag='h6'>{about}</CardText>
            </CardText>
            <CardFooter>Instagram: <a href={contact1}>{contact1}</a> Facebook: <a href={contact2}>{contact2}</a></CardFooter>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default CardWrapper;