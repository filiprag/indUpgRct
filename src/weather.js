import React,{Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Card} from 'react-bootstrap';

class Weather extends Component
{
    state={
        temperature:'',
        city:'',
        country:'',
        humidity:'',
        description:'',
    }
    getWeather=(e)=>{
        e.preventDefault();
        const city = e.target.elements.city.value
        const country = e.target.elements.country.value
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=72bc97862fc314e021f44610d4d0c869`).then(res=>{
            this.setState({
                temperature:res.data.main.temp,
                city:res.data.name,
                country:res.data.sys.country,
                humidity:res.data.main.humidity,
                description:res.data.weather[0].description
            }
            )
        })
    }

    render()
     {
        return(
            <div>
                <h1>Väder idag</h1>
         <Card bg="dark" text="white" className="mb-3"style={{color:`#000`, width: '26rem',  }}>
           <Card.Body>
           <Form onSubmit={this.getWeather}>
                    <Form.Group>
                        <Form.Label>Stad</Form.Label>
                        <Form.Control type="text" name="city" placeholder="Skriv in din stad" />
                        <Form.Text>
                            Skriv in stad och land för att få väderinformation
                        </Form.Text>
                        <Form.Control type="text" name="country" placeholder="Skriv in ditt land"/>
                    </Form.Group>
                    <Button type="submit" variant="info">Läs in väder</Button>
                </Form>
                   
           </Card.Body>
        </Card>

        <Card bg="dark" text="white" className="mb-3"style={{color:`#000`, width: '26rem' }}>
            <br/>
        <Card.Title>
               Väder idag är följande:
               </Card.Title>
           <Card.Body>
                    <p>Temp: {this.state.temperature}</p>
                    <p>Stad:  {this.state.city}</p>
                    <p>Land:  {this.state.country}</p>
                    <p>Fuktighet:  {this.state.humidity}</p>
                    <p>Beskriving:  {this.state.description}</p>
           </Card.Body>
        </Card>
            </div>
        )  

     } 

}
export default Weather;