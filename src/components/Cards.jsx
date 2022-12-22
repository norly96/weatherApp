import React, { useCallback } from "react"
import { Card, Button, ListGroup } from "react-bootstrap"
import svg from "/delete.svg";
import Icons from "./Icons";
import { useCards } from "../context/CardContext";

const Cards = (props) => {
  const { type, toFahr} = useCards();

  const calcGrades = useCallback(
    (num) => {
      switch (type) {
        case "C":
          return num;
        case "F":
          return toFahr(num);
        default:
          return num;
      }
    },
    [type]
  );

const ave = () => {
  return (((props.data.averageToday)+(props.data.averageDay1)+(props.data.averageDay2)+(props.data.averageDay3)+(props.data.averageDay4))/5)>30 ?   "info" :  "secondary"
}
    
  return (
    
    <Card bg={ave()} style={{ width: "18rem", margin: "0.5rem", padding: "1rem" }}>
      <img width="100" src={ Icons(((props.data.weatherCode).toString())) } alt="Weather Icon"/>
    <Card.Body>
      <Card.Title><h3>{props.data.name}</h3></Card.Title>
      <Card.Text>
        Latitud: {props.data.latitude} Longitud: {props.data.longitude}
      </Card.Text>
    </Card.Body>
    <ListGroup>
      <ListGroup.Item>Today  {calcGrades(props.data.averageToday).toFixed(2)} </ListGroup.Item>
      <ListGroup.Item>One day more  {calcGrades(props.data.averageDay1).toFixed(2)} </ListGroup.Item>
      <ListGroup.Item>Two days more  {calcGrades(props.data.averageDay2).toFixed(2)} </ListGroup.Item>
      <ListGroup.Item>Three days more  {calcGrades(props.data.averageDay3).toFixed(2)} </ListGroup.Item>
      <ListGroup.Item>Four days more  {calcGrades(props.data.averageDay4).toFixed(2)} </ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Button variant="warning" onClick={props.delete}><img width="30" src={svg} alt="SVG logo image"/>  DELETE</Button>
    </Card.Body>
  </Card>
  
  )
}

export default Cards
