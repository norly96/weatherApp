import { Button, Row, Form} from "react-bootstrap";
import { useState } from "react";
import { Request1, Request2 } from "../services/Api";
import Cards from "./Cards";
import Icons from "./Icons";
import Loader from "./Loader";

function FormCard() {
  const [search, setSearch] = useState('')
  const [flag, setFlag] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [cards, setCards] = useState([])
  
  const handleChange = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }

  const DeleteItem = id => {
    let arr = cards;
    arr.splice(id,1);
    setCards(arr);
    setFlag(!flag)
  }

  const average = (tempMax,tempMin) => {
    return (parseFloat(tempMax) + parseFloat(tempMin))/2
  }

  const getData = (search) => {
    let arr = cards;
    setLoading(true);
    Request1(search)
      .then((data)=> {
        Request2(
          data.results[0].latitude,
          data.results[0].longitude,
          data.results[0].timezone
        ).then((resp)=> {
          arr.push({
            "name": data.results[0].name,
            "latitude": data.results[0].latitude,
            "longitude": data.results[0].longitude,
            "timezone": data.results[0].timezone,
            "weatherCode": resp.daily.weathercode[0],
            "averageToday": average(resp.daily.temperature_2m_max[0],resp.daily.temperature_2m_min[0]),
            "averageDay1": average(resp.daily.temperature_2m_max[1],resp.daily.temperature_2m_min[1]),
            "averageDay2": average(resp.daily.temperature_2m_max[2],resp.daily.temperature_2m_min[2]),
            "averageDay3": average(resp.daily.temperature_2m_max[3],resp.daily.temperature_2m_min[3]),
            "averageDay4": average(resp.daily.temperature_2m_max[4],resp.daily.temperature_2m_min[4]),
          });
          setCards(arr);
          setFlag(!flag);
          setLoading(false)
        })
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    getData(search);
  }
    
  return (
    <>
    <Form style={{ margin: "1rem" }} onSubmit={handleSubmit}>
      <Form.Group  controlId="formBasicEmail">
        <Form.Control required onChange={handleChange}  type="name" name="city" placeholder="Enter a city name" />
      <Button style={{ margin: "1rem" }} variant="primary" type="submit">Submit</Button>
      </Form.Group>      
    </Form>
    <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

    {
      loading ? (<Loader/>) :
      cards.length > 0 ? (
        cards.map((card,index) => {
          return (
            <Cards data={card} key={index} id={index} delete={()=>DeleteItem(index)}/>
          );
        })) :
        error ? <h1 className="text-center" >ERROR</h1> : (<div className="text-center"><img width="100" src={ Icons("2") } alt="Weather Icon"/><h1>Submit a city to fill up this space</h1></div>)
    }
    </Row>
    </>
  );
}

export default FormCard;
